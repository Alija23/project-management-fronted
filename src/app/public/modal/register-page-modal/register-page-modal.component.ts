import { Component } from '@angular/core';
import { ModalService } from '../modal-service';

@Component({
  selector: 'app-register-page-modal',
  templateUrl: './register-page-modal.component.html',
  styleUrls: ['./register-page-modal.component.scss']
})
export class RegisterPageModalComponent {
  showModal$: boolean = true;

  constructor(private modalService: ModalService) {
  }
  
  openModal() {
    this.showModal$ = this.modalService.open();
  }

  closeModal() {
    this.showModal$ = this.modalService.close();
  }
  getDisplay() {
    return this.modalService.getDisplay();
  }
}
