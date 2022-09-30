import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from 'src/app/modules/products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsList: Product[] = [];
  products = new BehaviorSubject<Product[] | null>(null);
  product = new Subject<Product>();

  constructor() {
    this.initProducts()
  }

  initProducts(){
    const ps = [
      {
        id: 1,
        name: 'Product 1',
        type: 1,
        category: 'Category Two',
        isSub: true,
        refId: 298372,
        password: 'Cold-0912',
        dFeesP: 2,
        dFeesC: 1.5,
      },
      {
        id: 2,
        name: 'Product 2',
        type: 1,
        category: 'Category Two',
        isSub: true,
        refId: 298372,
        password: 'Cold-0912',
        dFeesP: 2,
        dFeesC: 1.5,
      },
      {
        id: 3,
        name: 'Product 3',
        type: 1,
        category: 'Category Two',
        isSub: true,
        refId: 298372,
        password: 'Cold-0912',
        dFeesP: 2,
        dFeesC: 1.5,
      },
      {
        id: 4,
        name: 'Product 4',
        type: 1,
        category: 'Category Two',
        isSub: true,
        refId: 298372,
        password: 'Cold-0912',
        dFeesP: 2,
        dFeesC: 1.5,
      },
      {
        id: 5,
        name: 'Product 5',
        type: 1,
        category: 'Category Two',
        isSub: true,
        refId: 298372,
        password: 'Cold-0912',
        dFeesP: 2,
        dFeesC: 1.5,
      },
    ];
    this.setProducts(ps);
  }

  setProducts(products: Product[]){
    this.productsList.push(...products);
    this.products.next(products);
  }

  getProducts(){
    return this.products.asObservable();
  }

  setProduct(product: Product) {
    this.product.next(product);
  }

  getProduct() {
    return this.product.asObservable();
  }
}
