import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-radio-checkbox',
  templateUrl: './radio-checkbox.component.html',
  styleUrls: ['./radio-checkbox.component.css']
})
export class RadioCheckboxComponent implements OnInit {

  myform: FormGroup;
  checkboxForm: FormGroup;
  submitted = false;
  genderList = [];
  selectedSkillList = [1, 3];
  skillList = [];
  submitModel: any = {};
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generateForm()
  }
  generateForm() {
    this.myform = this.fb.group({
      gender: [null, Validators.required],
      isagree: ['', Validators.requiredTrue],
      // skills: new FormArray([])
      skills: this.fb.array([], this.minSelectedCheckboxes(1))
    })
    of(this.getGenderList()).subscribe((data) => {
      this.genderList = data;
      this.myform.patchValue({ gender: this.genderList[0].id })
    })

    // asynchronous
    of(this.getSkills()).subscribe(data => {
      setTimeout(() => {

        this.skillList = data;
        this.addCheckboxes();
      }, 1000);
    })
    // synchronous
    // this.skillList = this.getSkills();
    // this.addCheckboxes();

    this.myform.get('skills').valueChanges.subscribe((data) => {
      console.log("value:", data)
    })
  }
  get skillsFormArray() {
    return this.myform.controls.skills as FormArray;
  }
  get f() {
    return this.myform.controls
  }
  onSubmit() {
    this.submitted = true;
    console.log("radio:", this.myform.value);
    this.submitModel = Object.assign({}, this.myform.value);
    const selectedSkillsIds = this.myform.value.skills
      .map((checked, i) => checked ? this.skillList[i].id : null)
      .filter(v => v !== null);
    this.submitModel.skills = selectedSkillsIds;
    console.log("selected-skills", this.submitModel);

  }
  addCheckboxes() {
    this.skillList.forEach((item, i) => {
      if (this.selectedSkillList.find(idx => idx === item.id)) {
        this.skillsFormArray.push(new FormControl(true))
      }
      else {
        this.skillsFormArray.push(new FormControl(false))
      }
    });
  }

  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);

      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };

    return validator;
  }

  getGenderList() {
    return [
      { id: 1, text: "male" },
      { id: 2, text: "female" },
      { id: 3, text: "others" },
    ]
  }
  getSkills() {
    return [
      { id: 1, name: 'Java Developer' },
      { id: 2, name: 'Python Developer' },
      { id: 3, name: 'C++ Developer' },
      { id: 4, name: 'Javascript Developer' },

    ]
  }
}
