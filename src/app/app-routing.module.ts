import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyelementComponent } from './bodyelement/bodyelement.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'home', component: BodyelementComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
