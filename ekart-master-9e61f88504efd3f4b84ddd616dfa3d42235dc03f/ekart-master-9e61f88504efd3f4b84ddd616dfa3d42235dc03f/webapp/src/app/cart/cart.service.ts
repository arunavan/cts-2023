import { Injectable } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/product';
import { UUID } from 'angular2-uuid';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {
    items: null,
    total: 0
  };

  constructor(private productsService: ProductsService) {  }

  getCart() {
    return this.cart;
  }

  addToCart(productId: number, quantity: number) {
    this.productsService.getProduct(productId).subscribe((productTobeAdded: Product) => {
      const uid = UUID.UUID();
      if (this.cart.items === null) {
        this.cart.items = [{ itemId: uid, product: productTobeAdded, quantity }];
        this.cart.total = productTobeAdded.price;
      } else {
        this.cart.items.push({ itemId: uid, product: productTobeAdded, quantity });
        this.cart.total += productTobeAdded.price;
      }
    });
  }

  removeFromCart(itemtId: string) {
    const itemIndex = this.cart.items.findIndex(cartItem => cartItem.itemId === itemtId);
    const itemTobeRemoved = this.cart.items.splice(itemIndex, 1)[0];
    this.cart.total -= itemTobeRemoved.product.price;
  }

  clearCart() {
    this.cart.items = null;
    this.cart.total = 0;
  }
}
