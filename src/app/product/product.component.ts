import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../home/product';
import { CartService } from '../services/cart.service';

// ovo treba postepeno da se ubacuje

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  numberOfElements: number = 0;
  //cartList: Product[] = [];
  isCartPage: boolean = false;

 // @ViewChild('addButton') addButton: any;
  @Input() product: Product;

  @Output() productCreated = new EventEmitter<Product>();
  @Output() productReduced = new EventEmitter<Product>();

  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    if (this.router.url === '/cart') this.isCartPage = true;
    else this.isCartPage = false;
  }

  onAddToCart() {
    if (this.product.supplies > 0) {
      this.product.supplies--;
      this.productCreated.emit(this.product);
    } //else this.addButton.nativeElement.disabled = true;
  }

  onRemoveFromCart() {
    if (this.product.supplies >= 0) {
      this.product.supplies++;
      this.productReduced.emit(this.product);
      //this.addButton.nativeElement.disabled = false;
    }
  }

  buttonClick=true;
}
