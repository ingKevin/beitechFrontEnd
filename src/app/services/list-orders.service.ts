import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { OrderModel } from '../model/order.model';
import { ClientModel } from '../model/client.model';

@Injectable()
export class ListOrdersService {

  constructor(private http: HttpClient) { }

  public getOrdersByClient(client: ClientModel): Observable<OrderModel[]>{
      return this.http.post<OrderModel[]>("http://localhost:8080/getOrdersByClient", JSON.stringify(client));
  }

}
