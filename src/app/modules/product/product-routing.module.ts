import { ProductsComponent } from './components/products/products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'add',
  // },
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'add',
        component: AddEditProductComponent,
      },
      {
        path: 'edit/:productId',
        component: AddEditProductComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'add',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
