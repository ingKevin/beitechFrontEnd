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

  public delete(product: ProductModel): void{
    this.http.post<ProductModel[]>("http://localhost:8080/deleteProduct", JSON.stringify(product)).subscribe();
  }

  public saveOrUpdate(product: ProductModel): void{
    console.log(product);
    this.http.post("http://localhost:8080/saveOrUpdateProduct", JSON.stringify(product)).subscribe();
  }

  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>("http://localhost:8080/getProducts");
  }




}
