import { ProductsService } from './../../../../shared/services/products.service';
import { Product } from '../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productsList!: Product[];
  tempProductsList!: Product[];
  selectedProduct!: Product | null;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listenToProduct();
    this.getProducts();
  }

  getProducts() {
    this.productsList = this.productsService.productsList;
    this.productsService.setProducts(this.productsList);
    this.tempProductsList = this.productsList;
  }

  search(e: any) {
    this.filterList(e.target.value);
  }

  select(product: Product) {
    this.selectedProduct = product;
    this.setProduct(product);
  }

  add() {
    this.router.navigate(['/products/add']);
  }

  filterList(value: string) {
    const v = value.toLowerCase();
    if (v) {
      this.productsList = this.productsList.filter((p) =>
        p.name.toLowerCase().includes(v)
      );
    } else {
      this.productsList = this.tempProductsList;
    }
  }

  listenToProduct() {
    this.productsService.getProduct().subscribe((p) => {
      this.setProduct(p);
    });
  }

  setProduct(p: Product | null) {
    this.selectedProduct = p;
    if(p){
      this.router.navigate(['/products/edit/' + p.id]);
    }else {
      this.router.navigate(['/products']);
    }

  }
}
