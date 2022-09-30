import { InputComponent } from './../../components/input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, ReactiveFormsModule],
})
export class SharedModule {}
