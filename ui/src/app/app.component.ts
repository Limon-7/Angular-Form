import { fromEvent, merge, Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { FilePondComponent } from 'ngx-filepond/filepond.component';
import { FilePondOptions } from 'filepond';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('file') file: File;
  title = 'practical-angular-core';
  isConnection: boolean;

  @ViewChild('myPond') myPond: FilePondComponent

  pondOptions = {
    allowMultiple: true,
    labelIdle: 'Drag & Drop your files or <span class="filepond--label-action"> Browse </span>',
    allowImagePreview: true,
    allowImageResize: true,
    allowImageCrop: true,
    imageCropAspectRatio: "1",
    acceptedFileTypes: 'image/jpeg, image/png',
    instantUpload: false,
    allowImageTransform: true,
    server: {
      url: 'http://192.168.0.100',
      process: {
        url: './process',
        method: 'POST',
        withCredentials: false,
        headers: {},
        timeout: 7000,
        onload: null,
        onerror: null,
        ondata: null,
      },
    }
  }
  pondFiles = ['index.html'];


  pondHandleInit = () => {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    let { file } = event;
    console.log('A file was added', event.file.file);
    console.log('PondFiles ', file);
  }

  pondHandleActivateFile(event: any) {
    console.log('A file was activated', event)
  }
  constructor(private toaster: ToastrService) {

  }
  ngOnInit() {
    this.createOnline$().subscribe(isonline => {
      this.isConnection = isonline;
      console.log("isonline:", isonline)
    })
  }
  notify() {
    this.toaster.success('hello');
  }
  //#region file compressed js
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
  //#endregion

}
