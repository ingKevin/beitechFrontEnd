import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductComponent } from './components/product/product.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';

const routes: Routes = [
  { path: '' , redirectTo: '/clientComponent', pathMatch: 'full'},
  { path: 'appComponent', component: AppComponent},
  { path: 'clientComponent', component: ClientComponent},
  { path: 'createClientComponent', component: CreateClientComponent},
  { path: 'editClientComponent', component: EditClientComponent},
  { path: 'editProductComponent', component:  EditProductComponent},
  { path: 'listProductsComponent', component: ListProductsComponent},
  { path: 'orderDetailComponent', component: OrderDetailComponent},
  { path: 'ordersComponent', component: OrdersComponent},
  { path: 'productComponent', component: ProductComponent},
  { path: 'listOrdersComponent', component: ListOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
