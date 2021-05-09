import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})
export class SelectOptionsComponent implements OnInit {

  cities = [
    { id: 1, name: 'Dhaka' },
    { id: 2, name: 'Rangpur' },
    { id: 3, name: 'Comilla' },
    { id: 4, name: 'Chittagong' },
  ]
  skills = [
    { id: 1, name: 'Java Developer' },
    { id: 2, name: 'Python Developer' },
    { id: 3, name: 'C++ Developer' },
    { id: 4, name: 'Javascript Developer' },
  ]
  myform: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generateForm();
  }
  generateForm() {
    this.myform = this.fb.group({
      username: ["Limon"],
      city: [this.skills[0].id, [Validators.required]],
      skill: [null, [Validators.required]],
    });
  }
  get f() {
    return this.myform.controls;
  }
  get city() {
    return this.myform.get('city')
  }
  oncityChange() {
    console.log("selected-city:", this.f.city.value)
  }
  onskillChange(s1, s2): boolean {
    console.log("selected-skill:", this.f.skill.value)
    return s1 && s2 ? s1.id === s2.id : s1 === s2;
  }



  onSubmit() {
    console.log(this.myform.value)
  }
}
