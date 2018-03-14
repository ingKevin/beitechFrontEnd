import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientModel } from '../../model/client.model';
import { OrderModel } from '../../model/order.model';
import { ProductModel } from '../../model/product.model';
import { ProductOrderModel } from '../../model/productOrder.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css'],
  providers: [OrdersService]
})
export class ListOrdersComponent implements OnInit {

  private orders: Array<OrderModel> ;
  private products: ProductOrderModel[];
  private client: ClientModel;

  constructor(private ordersService: OrdersService,
              private router: Router) {
      this.client = JSON.parse(sessionStorage.getItem('client'));
  }

  public loadOrders(): void{
    this.ordersService.getOrdersByClient(this.client).subscribe(res => {
      this.orders = res;
      let x = [];
      let p = {};
      res.forEach(function(order) {
        let productsAux = {};
        order.products.forEach(function (product){
          //productsAux[product.name] = (productsAux[product.name]||0) + 1;
        });
        x.push(productsAux);
        //console.log(x.toString());
      });
      this.products = x;

    });
  }

  public orderByDate(): void{

  }

  ngOnInit() {
    this.loadOrders();
  }
}
