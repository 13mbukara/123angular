// ovo ima

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/products.service';
import { Product } from './product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[];
  heading = 'Mobilni telefoni';
  search = '';
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.products = this.productService.products;
  }

  addNewItem(value: Product) {
    this.cartService.addProduct(value);
  }
}
