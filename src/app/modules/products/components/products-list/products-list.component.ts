import { Product } from '../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productsList!: Product[];
  tempProductsList!: Product[];
  selectedProduct!: Product;

  constructor() {}

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
    this.tempProductsList = this.productsList;
  }

  search(e: any) {
    this.filterList(e.target.value);
  }

  select(product: Product){
    this.selectedProduct = product;
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
