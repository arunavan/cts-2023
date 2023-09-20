import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {

  cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  onRemoveItem(itemId: string) {
    this.cartService.removeFromCart(itemId);
  }
}
