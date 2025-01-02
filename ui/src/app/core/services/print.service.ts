import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }
  print(val, containerId) {
    console.log(containerId);
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }

  printJson(val, containerId) {
    console.log(containerId);
    let el = document.createElement('li');
    el.innerText = JSON.stringify(val);
    document.getElementById(containerId).appendChild(el);
  }
}
