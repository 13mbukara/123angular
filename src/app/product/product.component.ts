import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() productObject: Product;

  @Output() productCreated = new EventEmitter<Product>();

  constructor(private cartService: CartService) {}
  ngOnInit(): void {}

  onAddToCart() {
    if (this.productObject.supplies > 0) {
      this.productObject.supplies--;
      this.cartService.cartList.push(this.productObject);
      this.productCreated.emit(this.productObject);
    }
    console.log('this.onAddToCart');
  }
}
