import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from '../home/product';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})

// ovo treba deo po deo

@Injectable() 
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  isEmpty = true;

  constructor(private cartService: CartService) {
    cartService.listLength.subscribe((length) => {
      if (length > 0) {
        this.isEmpty = false;
      }
    });
  }

  ngOnInit(): void {
    this.cartList = this.cartService.cartList;
  }

  addNewItem(value: Product) {
    this.cartService.addProduct(value);
  }

  reduceNumberOfItems(value: Product) {
    this.cartService.removeProduct(value);
  }
}
