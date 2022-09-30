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
  selectedProduct!: Product;

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsList = [
      {
        id: 1,
        name: 'Product 1',
      },
      {
        id: 2,
        name: 'Product 2',
      },
      {
        id: 3,
        name: 'Product 3',
      },
      {
        id: 4,
        name: 'Product 4',
      },
      {
        id: 5,
        name: 'Product 5',
      },
    ];
    this.productsService.setProducts(this.productsList);
    this.tempProductsList = this.productsList;
  }

  search(e: any) {
    this.filterList(e.target.value);
  }

  select(product: Product) {
    this.selectedProduct = product;
    this.productsService.setProduct(this.selectedProduct);
    this.router.navigate(['/products/edit/' + this.selectedProduct.id])
  }

  add(){
    this.router.navigate(['/products/add'])
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
}
