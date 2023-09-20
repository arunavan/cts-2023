import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {

  editForm: FormGroup;
  productEdited = false;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      'imageUrl': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'category': new FormControl(null, Validators.required),
      'expiryDate': new FormControl(null),
      'inStock': new FormControl(null, Validators.required),
      'isDeliveryFree': new FormControl(null)
    });
    this.route.params.subscribe((params: Params) => {
      const prodId = params['id'];
      this.productsService.getProduct(prodId).subscribe((product: Product) => {
        if (product) {
          this.editForm.patchValue({
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            category: product.category,
            expiryDate: product.expiryDate,
            inStock: product.inStock,
            isDeliveryFree: product.isDeliveryFree
          });
        } else {
          this.router.navigate(['not-found']);
        }
      });
    });
  }

  onSubmitEditForm() {
    console.log(this.editForm);
    this.productEdited = true;
  }
}
