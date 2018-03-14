import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { ProductModel } from './../../model/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  providers:[ProductService]
})
export class ListProductsComponent implements OnInit {

  private products: Array<ProductModel>;

  constructor(private productsService: ProductService, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts():void {
  this.productsService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  public edit(product: ProductModel): void{
    sessionStorage.setItem('product', JSON.stringify(product));
    this.router.navigate(['/editProductComponent']);
  }

}
