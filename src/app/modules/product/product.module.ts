import { SharedModule } from './../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './components/products/products.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductsListComponent } from './components/products-list/products-list.component';



@NgModule({
  declarations: [
    AddEditProductComponent,
    ProductsComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    NgbDropdownModule
  ]
})
export class ProductModule { }
