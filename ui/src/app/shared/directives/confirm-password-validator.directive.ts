import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Directive } from '@angular/core';

export function confirmPasswordMisMatch(confirmPassword: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let password = control.value;
    let isInValid = (password !== confirmPassword) ? true : false;
    return isInValid ? { 'cnfPassword': { value: 'inValid' } } : null;
  }
}
@Directive({
  selector: '[appConfirmPasswordValidator]'
})
export class ConfirmPasswordValidatorDirective {

  constructor() { }

}
