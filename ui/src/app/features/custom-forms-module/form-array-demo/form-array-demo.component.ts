import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-demo',
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.css']
})
export class FormArrayDemoComponent implements OnInit {

  userForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.generateForm();
  }
  get users() {
    return this.userForm.get('users') as FormArray
  }
  private generateForm() {
    this.userForm = new FormGroup({
      name: new FormControl("", Validators.required),
      users: new FormArray([
        new FormControl('limon'),
        new FormControl('')
      ])
    });
  }
  onFormSubmit() {
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users.at(i).value);
    }
    console.log("valid:", this.userForm.valid)
  }
  addUserField() {
    this.users.push(new FormControl(''));
  }
  deleteUserField(index: number) {
    this.users.removeAt(index);
  }


}
