import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { RestResponse } from '../model/restResponse.model';
import { OrderModel } from '../model/order.model';
import { ClientModel } from '../model/client.model';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) { }

  public saveOrUpdate(order: OrderModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdateOrder", JSON.stringify(order));
  }

  public getOrdersByClient(client: ClientModel): Observable<OrderModel[]>{
      return this.http.post<OrderModel[]>("http://localhost:8080/getOrdersByClient", JSON.stringify(client));
  }

}
