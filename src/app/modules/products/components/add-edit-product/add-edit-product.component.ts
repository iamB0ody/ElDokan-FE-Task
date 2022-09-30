import { Product } from 'src/app/modules/products/models/product.model';
import { ProductsService } from './../../../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  isEdit!: boolean;
  product!: Product;
  form!: FormGroup;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.ifEdit();
    this.listenToProduct();
  }

  initForm() {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      type: new FormControl(0, [Validators.required]),
      category: new FormControl('', [Validators.required]),
      isSub: new FormControl(false, [Validators.required]),
      refId: new FormControl(false, [Validators.required]),
      password: new FormControl(false, [Validators.required]),
      dFeesP: new FormControl(false, [Validators.required]),
      dFeesC: new FormControl(false, [Validators.required]),
    });
  }

  getFormControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  ifEdit() {
    this.route.params.subscribe((params: any) => {
      if (params.productId) {
        this.isEdit = true;
        this.getProduct(+params.productId);
      }
    });
  }

  listenToProduct() {
    this.productsService.getProduct().subscribe((p) => {
      if (p) {
        this.setProduct(p);
      }
    });
  }

  getProduct(productId?: number) {
    this.productsService.getProducts().subscribe((products) => {
      const p = products?.find((p) => p.id == productId);
      if (p) {
        this.setProduct(p);
      }
    });
  }

  setProduct(product: Product) {
    this.product = product;
    this.isEdit = true;
    this.form.patchValue(this.product);
  }
}
