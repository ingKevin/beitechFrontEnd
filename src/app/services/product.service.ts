import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ClientModel } from './../model/client.model';
import { ProductModel } from './../model/product.model';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProductsByClient(client: ClientModel): Observable<ProductModel[]>{
    return this.http.post<ProductModel[]>("http://localhost:8080/getProductsByClient", JSON.stringify(client));
  }

  public validate(product: ProductModel[]): boolean{
    let isValid = true;
    let count = 0;
    for(let p in product){

    }    
    return isValid
  }


}
