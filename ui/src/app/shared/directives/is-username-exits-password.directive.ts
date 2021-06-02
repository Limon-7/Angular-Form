import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Observable, of, pipe } from 'rxjs';
import { debounceTime, delay, map, tap, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';

export function userNameExitsInPassword(username: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let password = control.value;
    if (username.length == 0)
      return null
    let isInvalid = password.includes(username);
    return isInvalid ? { 'matchForUsername': { value: 'Invalid' } } : null
  }
}

export function checkUserNameExists(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | any> => {
    return userService.getUser(control.value).pipe(
      delay(2000),
      tap((user) => console.log("users", user)),
      map(
        users => {
          console.log("users", users)
          return (users) ? { "userExists": true } : null;
        }
      )
    )
  };
}
@Directive({
  selector: '[matchForUsername][formControlName],[matchForUsername][formControl]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IsUsernameExitsPasswordDirective, multi: true }]

})
export class IsUsernameExitsPasswordDirective implements Validator, OnChanges {
  @Input('matchForUsername')
  changedUsername: string;
  private _onChange: () => void;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if ('changedUsername' in changes) {
      if (this._onChange) this._onChange();
    }
  }
  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.changedUsername ?
      userNameExitsInPassword(this.changedUsername)(control) : null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    this._onChange = fn;
  }

}
