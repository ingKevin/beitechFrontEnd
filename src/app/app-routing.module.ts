import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientComponent} from './client/client.component'


const routes: Routes = [
  { path: '' , redirectTo: '/appComponent', pathMatch: 'full'},
  { path: 'appComponent', component: AppComponent},
  { path: 'clientComponent', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
