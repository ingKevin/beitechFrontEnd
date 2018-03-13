import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientComponent } from './components/client/client.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ProductComponent } from './components/product/product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CreateClientComponent,
    ProductComponent,
    CreateProductComponent,
    EditClientComponent,
    OrdersComponent,
    OrderDetailComponent,
    EditProductComponent,
    ListProductsComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
