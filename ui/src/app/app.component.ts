import { fromEvent, merge, Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('file') file: File;
  title = 'practical-angular-core';
  isConnection: boolean;
  constructor(private toaster: ToastrService) {
    this.createOnline$().subscribe(isonline => {
      this.isConnection = isonline;
      console.log("isonline:", isonline)
    })
  }
  ngOnInit() {

  }
  notify() {
    this.toaster.success('hello');
  }
  createOnline$() {
    return merge<boolean>(
      fromEvent(window, "offline").pipe(map(() => false)),
      fromEvent(window, "online").pipe(map(() => true)),
      new Observable((sub) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }
  async upload(e) {
    console.log(e.target.files[0])
    let file = e.target.files[0];
    let fileName = file.name;
    let img = new Image();
    img.src = URL.createObjectURL(file);
    console.log("orginal-size:", file.size + fileName);
    img.onload = function () {
      let canvas = document.createElement('canvas');
      canvas.width = 40;
      canvas.height = 40;
      let ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      let form = new FormData();
      canvas.toBlob(function (blob) {
        console.info(blob.size);
        let f2 = new File([blob], "fileName" + ".jpg");
        form.append("fileToUpload", f2);
        console.log("form:", form.getAll("fileToUpload"));
      }, 'image/jpg');
    }
    console.log("***dummyData:");
    let dummyData = await this.processImage(file);
    console.log("getImageData:", dummyData);
    console.log("Size of getImageData:", dummyData["size"]);
    const num = 1;
    console.log("num:", num)
    console.log("***dummyData:");
  }
  processImage(file: File) {
    return new Promise((resolve) => {
      let image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = (() => {
        console.log("canvas")
        let canvas = document.createElement('canvas');
        canvas.width = 40;
        canvas.height = 40;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        canvas.toBlob((blob: any) => {
          console.info(blob.size);
          let f2 = new File([blob], file.name + ".jpg");
          console.log("f2:", f2)
          resolve(f2);
        })
      })

    })
  }
}
