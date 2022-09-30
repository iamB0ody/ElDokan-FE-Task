import { ToastComponent } from './../../components/toast/toast.component';
import { ModalComponent } from './../../components/modal/modal.component';
import { InputComponent } from './../../components/input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [InputComponent, ModalComponent, ToastComponent],
  imports: [CommonModule, ReactiveFormsModule, NgbModalModule, NgbToastModule],
  exports: [
    InputComponent,
    ReactiveFormsModule,
    NgbModalModule,
    ModalComponent,
    ToastComponent,
    NgbToastModule,
  ],
})
export class SharedModule {}
