import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../home/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  /*styles: [
    `
      .visible {
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          max-width: 300px;
          margin: auto;
          text-align: center;
          font-family: arial;
        }
      }
    `,
  ],*/
})
export class ProductComponent implements OnInit {
  numberOfElements: number = 0;
  cartList: Product[] = [];
  isCartPage: boolean = false;

  @Input() product: Product;

  @Output() productCreated = new EventEmitter<Product>();

  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    if (this.router.url === '/cart') this.isCartPage = true;
    else this.isCartPage = false;
  }

  onAddToCart() {
    if (this.product.supplies > 0) {
      this.product.supplies--;
      this.productCreated.emit(this.product);
    }
  }

  onRemoveFromCart() {
    if (this.product.supplies > 0) {
      this.product.supplies++;
      this.productCreated.emit(this.product);
    }
  }
}
