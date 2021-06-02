import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practical-angular-core';

  constructor(private toaster: ToastrService) {

  }
  notify() {
    this.toaster.success('hello');
  }
}
