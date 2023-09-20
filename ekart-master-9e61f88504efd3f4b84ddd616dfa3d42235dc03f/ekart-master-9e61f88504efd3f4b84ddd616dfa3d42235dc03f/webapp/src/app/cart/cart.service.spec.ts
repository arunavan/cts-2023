import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('CartService', () => {
    let service: CartService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ], providers: [CartService]
        });
        service = TestBed.get(CartService);
    });

    it('should create cartservice', () => {
        expect(service).toBeTruthy();
    });

});
