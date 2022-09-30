import { ToastService } from './../../../../shared/services/toast.service';
import { ModalService } from './../../../../shared/services/modal.service';
import { Product } from 'src/app/modules/products/models/product.model';
import { ProductsService } from './../../../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  isEdit!: boolean;
  product!: Product | null;
  form!: FormGroup;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private toastService: ToastService
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
      refId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      dFeesP: new FormControl('', [Validators.required]),
      dFeesC: new FormControl('', [Validators.required]),
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
        this.productsService.setProduct(p);
      }
    });
  }

  setProduct(product: Product) {
    this.product = product;
    this.isEdit = true;
    this.form.patchValue(this.product);
  }

  save() {
    this.modalService
      .open(
        { size: 'lg', centered: true, fullscreen: true },
        {
          title: 'Save changes?',
          desc: 'Are you sure you want to save changes made?',
          btns: [
            {
              name: 'Discard',
              fn: 'close',
            },
            {
              name: 'Save',
              class: 'btn-primary',
              fn: 'ok',
            },
          ],
        }
      )
      .result.then(
        (close) => {
          if (close) {
            // Handle save
            this.toastService.show('Product deleted successfully', {
              // classname: 'bg-success text-light',
              delay: 2000,
              autohide: true,
              headertext: '',
              icon: 'success'
            });
          }
        },
        (error) => {}
      );
  }

  delete() {
    this.modalService
      .open(
        { size: 'lg', centered: true, fullscreen: true },
        {
          title: `Delete "${this.product?.name}"?`,
          desc: "Are you sure you want to delete product? Once deleted, you won't be able to access it again.",
          btns: [
            {
              name: 'Discard',
              fn: 'close',
            },
            {
              name: 'Delete',
              class: 'btn-danger',
              fn: 'ok',
            },
          ],
        }
      )
      .result.then(
        (close) => {
          if (close) {
            // Handle Delete
            this.toastService.show('Product deleted successfully', {
              // classname: 'bg-success text-light',
              delay: 2000,
              autohide: true,
              headertext: '',
              icon: 'success'
            });
          }
        },
        (error) => {}
      );
  }

  cancel(){
    this.product = null;
    this.isEdit = false;
    this.productsService.resetProduct()
    // this.router.navigate(['/products'])
  }
}
