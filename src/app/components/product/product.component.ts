import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ClientModel } from '../../model/client.model';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService,
              ClientService]
})
export class ProductComponent implements OnInit {

  private client: ClientModel;
  private products: ProductModel[];
  private noProductRepeat: boolean = true;
  private message: string ="";

  constructor(private productService: ProductService,
              private clientService: ClientService,
              private router: Router) {
      this.router.navigate(['/productComponent']);
  }

  private loadProducts():void {
  this.client = JSON.parse(sessionStorage.getItem("client"));
  this.productService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  public addProduct(product: ProductModel): void{
    this.noProductRepeat = true;
    for(var i = 0; i<this.client.products.length;i++){
      if(this.client.products[i].name == product.name){
        this.noProductRepeat = false;
      }
    }
    if(this.noProductRepeat){
      this.client.products.push(product);
      this.clientService.saveOrUpdate(this.client);
    }else{
      this.message = "Producto existente";
    }
  }

  public deleteProduct(index: number): void{
    this.client.products.splice(index, 1);
    this.clientService.saveOrUpdate(this.client);
  }

  ngOnInit() {
    this.loadProducts();
  }

}
