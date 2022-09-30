export interface ModalOptions {
  title: string;
  desc: string;
  btns: ModalButton[]
}

export interface ModalButton {
  name: string;
  class?: string;
  fn?: string;
}
