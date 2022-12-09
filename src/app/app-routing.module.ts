import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';

//ovo ima, treba malo tekst da se izmeni oko ovoga

const routes: Routes = [
  {
    path: 'cart',
    children: [
      {
        path: 'add',
        component: AddProductComponent,
      },
      {
        path: '',
        component: CartComponent,
      },
    ],
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
