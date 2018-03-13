import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { RestResponse } from '../model/restResponse.model';
import { ClientModel } from '../model/client.model';

@Injectable()
export class CreateClientService {

  constructor(private http: HttpClient) { }

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

  public saveOrUpdate(client: ClientModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdateClient", JSON.stringify(client));
  }
}
