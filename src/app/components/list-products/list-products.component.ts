import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListProductsService } from '../../services/list-products.service';
import { ProductModel } from './../../model/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  providers:[ListProductsService]
})
export class ListProductsComponent implements OnInit {

  private products: Array<ProductModel>;

  constructor(private listProductsService: ListProductsService, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts():void {
  this.listProductsService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  public edit(product: ProductModel): void{
    sessionStorage.setItem('product', JSON.stringify(product));
    this.router.navigate(['/editProductComponent']);
  }

}
