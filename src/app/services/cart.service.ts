import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../home/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartList: Product[] = [];
  listLength = new BehaviorSubject<number>(0);

  constructor() {}

  sendProduct(product: Product) {
    this.cartList.push(product);
    console.log(this.cartList);
    this.listLength.next(this.cartList.length);
  }
}
