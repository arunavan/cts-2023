import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { AuthService } from '../../site/auth.service';

@Component({
  selector: '[app-product-info]',
  templateUrl: './product-info.component.html'
})
export class ProductInfoComponent {

  @Input() product: Product;
  @Output() addedToCart: EventEmitter<number> = new EventEmitter<number>();
  productAdded = false;

  constructor(private authService: AuthService) { }

  onAddToCart(productId: number) {
    this.addedToCart.emit(productId);
    this.productAdded = true;
    setTimeout(() => {
      this.productAdded = false;
    }, 1000);
    return false;
  }

  isEditAllowed() {
    return this.authService.loggedIn && this.authService.isAdminUser();
  }
}
