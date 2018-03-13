import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { RestResponse } from '../model/restResponse.model';
import { ProductModel } from '../model/product.model';

@Injectable()
export class EditProductService {

  constructor(private http: HttpClient) { }

  public saveOrUpdate(product: ProductModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdateProduct", JSON.stringify(product));
  }

}
