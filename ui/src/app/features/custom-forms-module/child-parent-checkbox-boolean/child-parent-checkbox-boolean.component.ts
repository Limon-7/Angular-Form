import { Component, OnInit } from '@angular/core';
import { allRolesData } from './data/allRolesData';
import { allParentChildData } from './data/allParent';
import { allSelectedParents } from './data/allSelectedParents';
import { allSelectedChildsData } from './data/allSelectedChildsData';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-child-parent-checkbox-boolean',
  templateUrl: './child-parent-checkbox-boolean.component.html',
  styleUrls: ['./child-parent-checkbox-boolean.component.css']
})
export class ChildParentCheckboxBooleanComponent implements OnInit {

  parentChildData: any[] = allParentChildData;
  allRolesData: any[] = allRolesData;
  // role id=141
  selctedParentsData: any[] = allSelectedParents;
  // parent id=121 and roleid=141
  selectedChildData: any[] = allSelectedChildsData;
  isSelected: boolean = false;

  myform: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log("all-child-parent-data:", this.parentChildData)
    console.log("all-roles:", this.allRolesData)
    console.log("all-selctedParentsData:", this.selctedParentsData)
    console.log("all-selectedChildData:", this.selectedChildData)
    this.generateForm();

    this.addParentCheckboxes();
    setTimeout(() => {

      this.addChildCheckboxes();
    }, 5000);
  }
  private generateForm() {
    this.myform = this.fb.group({
      parentTasks: this.fb.array([]),
      childTasks: this.fb.array([])
    })
  }
  addParentCheckboxes() {
    this.parentChildData.forEach((item, i) => {
      if (this.selctedParentsData.find(x => x.ID === item.ID)) {
        this.parenttasksFormArray.push(new FormControl(true))
      }
      else {
        this.parenttasksFormArray.push(new FormControl(false))
      }
    });
  }
  addChildCheckboxes() {
    this.parentChildData.forEach((item, i) => {
      let childTask = item.childTask;
      console.log("Get-childTask:", childTask)
      if (childTask) {
        childTask.forEach((child, k) => {

          if (this.selectedChildData.find(x => x.ID === child.ID)) {
            this.childTaskFormArray.push(new FormControl(true))
          }
          else {
            this.childTaskFormArray.push(new FormControl(false))
          }
        })
      }
    });
  }
  get f() {
    return this.myform.controls;
  }
  get parenttasksFormArray() {
    return this.myform.controls.parentTasks as FormArray;
  }
  get childTaskFormArray() {
    return this.myform.controls.childTasks as FormArray;
  }

  onSubmit() {
    console.log("form submitted successfully:", this.myform.value)
  }
}
