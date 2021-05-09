import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-multiple-checkbox',
  templateUrl: './multiple-checkbox.component.html',
  styleUrls: ['./multiple-checkbox.component.css']
})
export class MultipleCheckboxComponent implements OnInit {
  myform: FormGroup;
  skillList: any = [];
  selectedSkills: number[] = [1, 3];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generateMyform();

    of(this.getSkillList()).subscribe(data => {
      this.skillList = data;
      this.addCheckboxes();
    })
  }


  addCheckboxes() {
    this.skillList.forEach((item, i) => {
      if (this.selectedSkills.find(idx => idx === item.id)) {
        this.skillFormArray.push(new FormControl(item.id))
      }
    });
  }
  onCbChange(e) {
    console.log(e);
    if (e.target.checked) {
      this.skillFormArray.push(new FormControl(Number(e.target.value)));
    } else {
      let i: number = 0;
      this.skillFormArray.controls.forEach((item: FormControl) => {
        if (Number(item.value) === Number(e.target.value)) {
          this.skillFormArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  get skillFormArray() {
    return this.myform.get('skills') as FormArray;
  }
  get f() {
    return this.myform.controls;
  }
  private generateMyform() {
    this.myform = this.fb.group({
      username: ["", [Validators.required]],
      skills: this.fb.array([], Validators.required)
    });
  }
  onSubmit() {
    console.log("from value:", this.myform.value)
  }


  private getSkillList() {
    return [
      { id: 1, name: 'Java Developer' },
      { id: 2, name: 'Python Developer' },
      { id: 3, name: 'C++ Developer' },
      { id: 4, name: 'Javascript Developer' },

    ]
  }
}
