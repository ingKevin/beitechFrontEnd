import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { RestResponse } from '../model/restResponse.model';
import { OrderModel } from '../model/order.model';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) { }

  public validate(): boolean{
    let isValid = true;

    return isValid
  }

  public saveOrUpdate(order: OrderModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdateOrder", JSON.stringify(order));
  }

}
