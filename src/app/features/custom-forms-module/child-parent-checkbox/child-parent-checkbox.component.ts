import { Component, OnInit } from '@angular/core';
import { allRolesData } from './data/allRolesData';
import { allParentChildData } from './data/allParent';
import { allSelectedParents } from './data/allSelectedParents';
import { allSelectedChildsData } from './data/allSelectedChildsData';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-parent-checkbox',
  templateUrl: './child-parent-checkbox.component.html',
  styleUrls: ['./child-parent-checkbox.component.css']
})
export class ChildParentCheckboxComponent implements OnInit {
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
    this.addParentSelectedCheckboxes();
    this.addChildSelectedCheckboxes()
  }
  isParentToCheck(id: number) {
    let task = this.selctedParentsData.find(x => x.ID === id)
    if (task) return true;
    return false;
  }
  isChildToCheck(id: number, isTrue: boolean) {
    let task = this.selectedChildData.find(x => x.ID === id)
    if (task) return true;
    return false;
  }


  addParentSelectedCheckboxes() {
    this.parentChildData.forEach((item, i) => {
      if (this.selctedParentsData.find(x => x.ID === item.ID)) {
        this.parenttasksFormArray.push(new FormControl(item.ID))
      }
    });
  }
  addChildSelectedCheckboxes() {
    this.parentChildData.forEach((item, i) => {
      let childTask = item.childTask;
      if (childTask) {
        childTask.forEach((child, k) => {
          if (this.selectedChildData.find(x => x.ID === child.ID)) {
            this.childTaskFormArray.push(new FormControl(child.ID))
          }
        })
      }
    });
  }
  onParentChange(e, childTasks) {
    console.log("is-parent checked:", e.target.checked)
    console.log("get childTask", childTasks)
    if (e.target.checked) {
      this.parenttasksFormArray.push(new FormControl(Number(e.target.value)));
      this.selectAllChildTask(childTasks);
    } else {
      this.unSelectAllChildTask(childTasks)
      let i: number = 0;
      this.parenttasksFormArray.controls.forEach((item: FormControl) => {

        if (Number(item.value) === Number(e.target.value)) {
          this.parenttasksFormArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onChildChange(e) {
    if (e.target.checked) {
      this.childTaskFormArray.push(new FormControl(Number(e.target.value)));
    } else {
      let i: number = 0;
      this.childTaskFormArray.controls.forEach((item: FormControl) => {
        if (Number(item.value) === Number(e.target.value)) {
          this.childTaskFormArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  private selectAllChildTask(childTasks) {
    childTasks.forEach((child, i) => {
      child.isSelected = true;
      console.log("childTask-item:", child.isSelected)
      this.childTaskFormArray.push(new FormControl(child.ID))
    })
  }
  private unSelectAllChildTask(childTasks) {
    childTasks.forEach((child, j) => {
      child.isSelected = false;
      let i: number = 0;
      this.childTaskFormArray.controls.forEach((item: FormControl, k) => {
        if (Number(item.value) === Number(child.ID)) {
          this.childTaskFormArray.removeAt(i);
          // remove selected child task from selectedChildList
          let index = this.selectedChildData.map((x => x.ID)).indexOf(child.ID);
          this.selectedChildData.splice(index, 1);
          return;
        }
        i++
      })
    })
  }

  checkOrUnCheck() {

  }
  private generateForm() {
    this.myform = this.fb.group({
      parentTasks: this.fb.array([]),
      childTasks: this.fb.array([])
    })
  }

  get f() {
    return this.myform.controls;
  }
  get parenttasksFormArray() {
    return this.myform.get('parentTasks') as FormArray;
  }
  get childTaskFormArray() {
    return this.myform.get('childTasks') as FormArray;
  }

  onSubmit() {
    console.log("form submitted successfully:", this.myform.value)
  }
}
