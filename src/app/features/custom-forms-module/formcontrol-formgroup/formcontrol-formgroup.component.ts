import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcontrol-formgroup',
  templateUrl: './formcontrol-formgroup.component.html',
  styleUrls: ['./formcontrol-formgroup.component.css']
})
export class FormcontrolFormgroupComponent implements OnInit {

  formGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.genereteForm();
  }
  genereteForm() {
    this.formGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
      company: new FormControl("", [Validators.required]),
    })
  }
  get username() {
    return this.formGroup.get('username');
  }
  get company() {
    return this.formGroup.get('company');
  }

  updateFormSetValue() {
    this.formGroup.setValue({ username: 'Limon', company: "" });
  }
  updateFormPatchValue() {
    this.formGroup.patchValue({ username: 'Limon' });
  }
  onSubmit() {
    console.log("form submitted", this.formGroup.value);
    console.log("userName", this.formGroup.get('username').value);
    this.resetForm();
  }
  resetForm() {
    this.formGroup.reset();
  }

}
