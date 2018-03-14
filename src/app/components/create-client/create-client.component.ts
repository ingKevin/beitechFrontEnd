import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientModel } from '../../model/client.model';
import { ClientService } from '../../services/client.service';
import { OK } from '../../model/httpstatus';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
  providers: [ClientService]
})
export class CreateClientComponent implements OnInit {

  private client: ClientModel;
  private isValid: boolean = true;
  private message: string ="";

  constructor(private ClientService: ClientService,
              private router: Router) {
      if(sessionStorage.getItem("client")){
        this.client = JSON.parse(sessionStorage.getItem("client"));
      } else{
        this.client = new ClientModel();
      }
  }

  public saveOrUpdate(): void{
    this.isValid = this.ClientService.validate(this.client);
    if(this.isValid){
      this.ClientService.saveOrUpdate(this.client);
      this.router.navigate(['/clientComponent']);
    }else{
      this.message = "Campos obligatorios";
    }    
  }
  ngOnInit() {
  }

}
