import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../home/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartList: Product[] = [];
  listLength = new BehaviorSubject<number>(0);

  constructor() {}

  addProduct(product: Product) {
    const existingProduct = this.cartList.find((p) => p.title == product.title);
    if (!existingProduct) {
      product.inCart++;
      this.cartList.push(product);
    } else existingProduct.inCart++;
    this.listLength.next(this.cartList.reduce((a, b) => a + b.inCart, 0)); //radi sumu svih inCart vrednosti
  }

  removeProduct(product: Product) {
    const index = this.cartList.findIndex((p) => p.title == product.title); // trazi index elementa za brisanje
    if (index < 0) {
      return;
    }
    this.cartList[index].inCart--;
    if (this.cartList[index].inCart === 0) this.cartList.splice(index, 1); //brise element iz niza ako mu je inCart = 0
    this.listLength.next(this.cartList.reduce((a, b) => a + b.inCart, 0)); //radi sumu svih inCart vrednosti
  }
}
