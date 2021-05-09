import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcontrol-reactive-form',
  templateUrl: './formcontrol-reactive-form.component.html',
  styleUrls: ['./formcontrol-reactive-form.component.css']
})
export class FormcontrolReactiveFormComponent implements OnInit {
  username: any;
  company: any;
  constructor() { }

  ngOnInit(): void {
    this.generateForm()
  }
  private generateForm() {
    this.username = new FormControl('limon', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
    this.company = new FormControl('', [Validators.required, Validators.minLength(2)]);
  }
  onSubmit() {
    // preventDefault();
    console.log("form submited:");
  }
}
