import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from '../home/product';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
@Injectable()
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  elementsInCart: number = 0;
  isVisible = true;

  constructor(private cartService: CartService) {
    cartService.listLength.subscribe((length) => {
      this.elementsInCart = length;
      if (this.elementsInCart > 0) {
        this.isVisible = false;
      }
    });
  }

  ngOnInit(): void {
    this.cartList = this.cartService.cartList;
  }

  onEmptyCart() {
    if (this.elementsInCart > 0) {
      this.isVisible = false;
    }
  }
}
