import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label!: string;
  @Input() hint!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() classes: string = 'form-control';
  @Input() containerclasses: string = 'form-group';
  @Input() ids!: string;
  @Input() srOnly!: string;
  @Input() options!: string[];

  constructor() {}

  ngOnInit(): void {}
}
