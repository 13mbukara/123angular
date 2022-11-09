import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from './product';

@Component({
  selector: 'app-bodyelement',
  templateUrl: './bodyelement.component.html',
  styleUrls: ['./bodyelement.component.scss'],
})
export class BodyelementComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  products: Product[] = [
    {
      description: 'opis1',
      image: '../../assets/images/Telefon.jpg',
      price: '123',
      title: 'naziv',
      supplies: 10,
    },
    {
      description: 'opis1',
      image: '../../assets/images/Telefon.jpg',
      price: '123',
      title: 'naziv',
      supplies: 15,
    },
    {
      description: 'opis1',
      image: '../../assets/images/Telefon.jpg',
      price: '123',
      title: 'naziv',
      supplies: 20,
    },
    {
      description: 'opis1',
      image: '../../assets/images/Telefon.jpg',
      price: '123',
      title: 'naziv',
      supplies: 100,
    },
  ];

  addNewItem(value: Product) {
    this.cartService.sendProduct(value);
    console.log(value);
  }
}
