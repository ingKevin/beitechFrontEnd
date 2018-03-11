import { Component, OnInit } from '@angular/core';

import {ClientService} from './client.service';
import {ClientModel} from '../model/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers:[ClientService]
})
export class ClientComponent implements OnInit {

  private clients: Array<ClientModel>;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers():void {
  this.clientService.getClients().subscribe(res => {
      this.clients = res;
      console.log(res);
    });
  }

}
