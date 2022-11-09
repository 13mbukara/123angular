import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../bodyelement/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  numberOfElements: number = 0;
  cartList: Product[] = [];
  isCartPage: boolean = false;

  @Input() productObject: Product;

  @Output() productCreated = new EventEmitter<Product>();

  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    if (this.router.url === '/cart') this.isCartPage = true;
    else this.isCartPage = false;
  }

  onAddToCart() {
    if (this.productObject.supplies > 0) {
      this.productObject.supplies--;
      this.productCreated.emit(this.productObject);
    }
  }
}
