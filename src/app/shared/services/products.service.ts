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

  constructor() {}

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
