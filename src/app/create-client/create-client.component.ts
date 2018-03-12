import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientModel } from '../model/client.model';
import { CreateClientService } from './create-client.service';
import { OK } from '../model/httpstatus';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
  providers: [CreateClientService]
})
export class CreateClientComponent implements OnInit {

  private client: ClientModel;
  private isValid: boolean = true;
  private message: string ="";

  constructor(private createClientService: CreateClientService,
              private router: Router) {
    this.client = new ClientModel();
  }

  public saveOrUpdate(): void{
    this.isValid = this.createClientService.validate(this.client);
    if(this.isValid){
      this.createClientService.saveOrUpdate(this.client).subscribe(res =>{
        if(res.responseCode == OK){
          this.router.navigate(['/clientComponent']);
        }else{
          this.message = res.message;
        }
      });
    }else{
      this.message = "Campos obligatorios";
    }
  }
  ngOnInit() {
  }

}
