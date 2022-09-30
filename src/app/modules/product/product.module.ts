import { SharedModule } from './../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './components/products/products.component';



@NgModule({
  declarations: [
    AddEditProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
