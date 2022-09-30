import { ModalComponent } from './../components/modal/modal.component';
import { Injectable } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'src/app/modules/products/models/modal-options.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private modalService: NgbModal) {}

  open(options: NgbModalOptions, inputs: ModalOptions) {
    const modalRef = this.modalService.open(ModalComponent, options);
    modalRef.componentInstance.options = inputs;
    return modalRef;
  }
}
