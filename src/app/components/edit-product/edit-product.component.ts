import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../model/product.model';
import { EditProductService } from '../../services/edit-product.service';
import { OK } from '../../model/httpstatus';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers: [EditProductService]
})
export class EditProductComponent implements OnInit {

  private product: ProductModel;
  private message: string ="";
  public isValid: boolean = true;

  constructor(private editProductService: EditProductService,
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
      this.editProductService.saveOrUpdate(this.product).subscribe(res =>{
        if(res.responseCode == OK){
          this.router.navigate(['/listProductsComponent']);
        }else{
          this.message = res.message;
        }
      });
    }else{
      this.message = "El campo no puede estar vacío.";
    }
    sessionStorage.clear();
  }

  ngOnInit() {
  }

}
