import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from '../bodyelement/product';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
@Injectable()
export class CartComponent implements OnInit {
  cartList: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.cartList;
  }
}
