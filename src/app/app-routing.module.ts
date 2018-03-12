import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { CreateClientComponent } from './create-client/create-client.component';


const routes: Routes = [
  { path: '' , redirectTo: '/clientComponent', pathMatch: 'full'},
  { path: 'appComponent', component: AppComponent},
  { path: 'clientComponent', component: ClientComponent},
  { path: 'createClientComponent', component: CreateClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
