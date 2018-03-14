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

  public delete(client: ClientModel): void{
    this.http.post("http://localhost:8080/deleteClient",JSON.stringify(client)).subscribe();
  }

  public saveOrUpdate(client: ClientModel): void{
    this.http.post("http://localhost:8080/saveOrUpdateClient",JSON.stringify(client)).subscribe();
  }

  public validate(client: ClientModel): boolean{
    let isValid = true;

    if(!client.name){
      isValid = false;
    }
    if(!client.email){
      isValid = false;
    }
    return isValid
  }
}
