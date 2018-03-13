import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ClientModel } from '../../model/client.model';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  private client: ClientModel;
  private isValid: boolean = true;
  private message: string ="";

  constructor(private productService: ProductService,
              private router: Router) {
      this.client = JSON.parse(sessionStorage.getItem("client"));
      this.router.navigate(['/productComponent']);
  }

  public order(): void{
    this.isValid = this.productService.validate(this.client.products);
    if(this.isValid){
      /*
      this.productService.saveOrUpdate(this.client).subscribe(res =>{
        if(res.responseCode == OK){
          this.router.navigate(['/clientComponent']);
        }else{
          this.message = res.message;
        }
      });*/
    }else{
      this.message = "¡Máximo 5 productos!";
    }
    sessionStorage.clear();
  }


  ngOnInit() {

  }

}
