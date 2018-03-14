import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { OK } from '../../model/httpstatus';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers: [ProductService]
})
export class EditProductComponent implements OnInit {

  private product: ProductModel;
  private message: string ="";
  public isValid: boolean = true;

  constructor(private productService: ProductService,
              private router: Router) {
    if(sessionStorage.getItem("product")){
      this.product = JSON.parse(sessionStorage.getItem("product"));
    } else{
      this.product = new ProductModel();
    }
  }

  public saveOrUpdate(): void{
    if(!this.product.price){
      this.isValid = false;
    }
    if(this.isValid){
      this.productService.saveOrUpdate(this.product);
      this.router.navigate(['/listProductsComponent']);
    }else{
      this.message = "El campo no puede estar vacío.";
    }

    sessionStorage.clear();
  }

  ngOnInit() {
  }

}
