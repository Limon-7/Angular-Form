import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;

  // City names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generateForm()
  }

  private generateForm() {
    this.registrationForm = this.fb.group({
      fullName: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
        lastName: ['', [Validators.required]]
      }),
      // email: [''],
      // phoneNumber: [''],
      // address: this.fb.group({
      //   street: [''],
      //   city: [''],
      //   cityName: ['']
      // }),
      // gender: [''],
      // PasswordValidation: this.fb.group({
      //   password: [''],
      //   confirmPassword: ['']
      // }),
    });
  }
  get f() {
    return this.registrationForm.controls;
  }
  onSubmit() {
    console.log("form submited")
  }
}
