import { ModalButton } from './../../../modules/products/models/modal-options.model';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() options!: any

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(value?: number){
    this.activeModal.close(value ? value : 0)
  }

  ok(){
    this.close(1)
  }

  // click(btn: ModalButton){
  //   this[btn.fn]();
  // }

}
