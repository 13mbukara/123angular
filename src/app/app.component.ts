import { Component } from '@angular/core';
import { Product } from './bodyelement/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '123angular';
  product: Product;

  addNewItem(value: any) {
    this.product = value;
    console.log(value);
  }
}
