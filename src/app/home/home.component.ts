import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from './product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class homeComponent implements OnInit {
  constructor(private cartService: CartService) {}
  heading = 'Mobilni telefoni';

  ngOnInit(): void {}

  products: Product[] = [
    {
      title: 'Samsung Galaxy S22 Ultra',
      description:
        'Samsung Galaxy S22 Ultra glavni je model S22 serije. To je prvi telefon serije S koji uključuje Samsungovu S Pen olovku.',
      image: '../../assets/images/Samsung-S22-U3.png',
      price: '985€',
      supplies: 4 + Math.floor(Math.random() * 30),
    },
    {
      title: 'Apple iPhone 14 Pro',
      description:
        'iPhone 14 ima isti superbrzi čip kao i iPhone 13 Pro. Ažurirani dizajn pruža bolje performanse, tako da možete duže ostati u akciji.',
      image: '../../assets/images/iphone.png',
      price: '1790€',
      supplies: 4 + Math.floor(Math.random() * 30),
    },
    {
      title: 'Xiaomi Redmi 10 Power',
      description:
        'Ako želite dugotrajnu bateriju i snažan procesor, Redmi 10 vredi kupiti, ali je kamera lošija od drugih modela.',
      image: '../../assets/images/xiaomi.png',
      price: '210€',
      supplies: 4 + Math.floor(Math.random() * 30),
    },
    {
      title: 'Samsung Galaxy Z Flip 3',
      description:
        'Samsung Z flip je prvi sklopivi pametni telefon koji koristi stakleni ekran. To smanjuje nabore stakla u predelu savijanja.',
      image: '../../assets/images/samsung-flip.png',
      price: '685€',
      supplies: 4 + Math.floor(Math.random() * 30),
    },
  ];

  addNewItem(value: Product) {
    console.log(value);
    this.cartService.sendProduct(value);
  }
}


