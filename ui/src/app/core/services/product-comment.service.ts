import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCommentService extends BaseService {

  constructor(http:HttpClient) {
    super(http, "ProductComments");
  }
}
