import { Component, HostListener, Input } from '@angular/core';
import { ModalService } from '../modal/modal-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  showDiv: boolean = true;
  windowWidth: number;

  constructor(private modalService: ModalService) {
    this.windowWidth = window.innerWidth; 
  }

  openRegisterPage() {
    this.modalService.open();
  } 

  getModalDisplay(): boolean {
    return this.modalService.getDisplay();
  }
 
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1250) {
      this.showDiv = false;
    } else {
      this.showDiv = true;
    }
  }
}
