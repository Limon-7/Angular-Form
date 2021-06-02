import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { confirmPasswordMisMatch } from 'src/app/shared/directives/confirm-password-validator.directive';
import { checkUserNameExists, userNameExitsInPassword } from 'src/app/shared/directives/is-username-exits-password.directive';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.generateForm();
    this.handleFormChanges();
    this.userService.getUser("limonn").subscribe(val => {
      console.log("user:", val)
    })
  }
  generateForm() {
    this.myForm = this.fb.group({
      username: ['',
        {
          validators: [Validators.required],
          asyncValidators: [checkUserNameExists(this.userService)],
          updateOn: 'blur'
        }
      ],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      // email: [''],
      // mobileNo: ['']
    })
  }
  get f() {
    return this.myForm.controls;
  }
  handleFormChanges() {
    this.f.username.valueChanges
      .pipe(debounceTime(600), switchMap(val => {
        return of(val)
      })).subscribe(val => {

        console.log(this.f.username);
        //this.f.username.setAsyncValidators([checkUserNameExists(this.userService)]);

        this.f.password.setValidators([Validators.required, userNameExitsInPassword(val)]);
        this.f.password.updateValueAndValidity();
      })
    this.f.password.valueChanges
      .pipe(debounceTime(500), switchMap(val => {
        return of(val)
      })).subscribe(val => {
        let uname = this.f.username.value;
        this.f.password.setValidators([Validators.required, userNameExitsInPassword(uname)]);

        this.f.confirmPassword.setValidators([Validators.required, confirmPasswordMisMatch(val)]);
        this.f.confirmPassword.updateValueAndValidity();
      })
    this.f.confirmPassword.valueChanges
      .pipe(debounceTime(500), switchMap(val => {
        return of(val)
      })).subscribe(val => {
        let password = this.f.password.value;
        this.f.confirmPassword.setValidators([Validators.required, confirmPasswordMisMatch(password)]);
        //this.f.confirmPassword.updateValueAndValidity();
      })

  }
  onSubmit() {
    if (this.myForm.invalid)
      return;
    console.log("submitted", this.myForm.value);
  }
}
