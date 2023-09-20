import { Product } from '../products/product';
export interface Cart {
    items: [{
        itemId: string,
        product: Product,
        quantity?: number
    }];
    total: number;
}
