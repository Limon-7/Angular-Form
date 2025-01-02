import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { Observable } from 'rxjs';
import { IBrand } from '../models/i-brand';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends BaseService {

  constructor(http: HttpClient) {
    super(http,"Brands");
  }

  // getProducts(): Observable<IBrand[]>{
  //   return this.get<IBrand>();
  // }
}
