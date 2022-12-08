import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MatIconModule } from '@angular/material/icon';
import { RedElDirective } from './directives/red-el.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //4
import { FilterPipe } from './filter.pipe';
import { FormaComponent } from './forma/forma.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    RedElDirective,
    FilterPipe,
    FormaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    FormsModule, //3
    ReactiveFormsModule, //3
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
