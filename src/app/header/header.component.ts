import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItems: number = 111;

  constructor(private cartService: CartService) {
    cartService.listLength.subscribe((length) => (this.cartItems = length));
  }

  ngOnInit(): void {}
}
