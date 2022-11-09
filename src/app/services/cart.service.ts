import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../bodyelement/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartList: Product[] = [];
  productList = new BehaviorSubject<any>([]);

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartList.push(product);
    this.productList.next(this.cartList);
  }

  sendProduct(product: Product) {
    console.log(product);
    console.log(this.cartList);
    this.cartList.push(product);
  }
}
