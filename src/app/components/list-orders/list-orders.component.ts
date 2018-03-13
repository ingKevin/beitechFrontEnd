import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientModel } from '../../model/client.model';
import { OrderModel } from '../../model/order.model';
import { ListOrdersService } from '../../services/list-orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css'],
  providers: [ListOrdersService]
})
export class ListOrdersComponent implements OnInit {

  private orders: Array<OrderModel>;
  private client: ClientModel;

  constructor(private listOrdersService: ListOrdersService,
              private router: Router) {
    this.client = JSON.parse(sessionStorage.getItem('client'));
    this.listOrdersService.getOrdersByClient(this.client).subscribe(res =>
      this.orders = res
    );
  }

  ngOnInit() {

  }
}
