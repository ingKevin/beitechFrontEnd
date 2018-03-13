import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ProductModel } from './../model/product.model';

@Injectable()
export class ListProductsService {

  constructor(private http : HttpClient) { }

  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>("http://localhost:8080/getProducts");
  }

}
