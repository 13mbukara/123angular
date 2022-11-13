import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { homeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    homeComponent,
    ProductComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
