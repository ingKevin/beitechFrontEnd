import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {ClientModel} from './../model/client.model';

@Injectable()
export class ClientService {

  constructor(private http : HttpClient) { }

  public getClients(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>("http://localhost:8080/getClients");
  }

}
