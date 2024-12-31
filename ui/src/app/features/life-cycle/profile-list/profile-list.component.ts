import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  isChildVisible = true;
  parentMessage = 'Initial message from parent';

  constructor() { }
  toggleComponent() {
    console.log("Button clicked");
    this.isChildVisible = !this.isChildVisible;
  }

  ngOnInit(): void {
    
  }
}
