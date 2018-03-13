import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientModel } from '../../model/client.model';
import { ProductModel } from '../../model/product.model';
import { OrderModel } from '../../model/order.model';
import { OrdersService } from '../../services/orders.service';
import { OK } from '../../model/httpstatus';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {

  private order: OrderModel = <OrderModel>{};
  private products: Array<ProductModel> = [];
  private message: string;

  constructor(private ordersService: OrdersService,
              private router: Router) {
      this.order.client= JSON.parse(sessionStorage.getItem('client'));
      this.order.date = new Date();
      this.order.price = 0;
      this.order.address = "";
  }

  public addProduct(product: ProductModel): void{
    this.products.push(product);
    this.order.price += product.price;
  }

  public deleteProduct(index: number): void{
    this.order.price -= this.products[index].price;
    this.products.splice(index, 1);
  }

  public orders(): void{
    this.order.products = this.products;
    this.ordersService.saveOrUpdate(this.order).subscribe(res =>{
      if(res.responseCode == OK){
        this.router.navigate(['/clientComponent']);
      }else{
        this.message = res.message;
      }
    });
    this.router.navigate(['/clientComponent']);
    sessionStorage.clear();
    }

  ngOnInit() {
  }

}
