import { Component, HostListener} from '@angular/core';
import { LoginFormModel } from '../../model/login-form-model';
import { PublicService } from '../../service/public.service';
import { ModalService } from '../../modal/modal-service';
import { InputStatus } from '../../model/error-model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginFormsModel: LoginFormModel = {
    username: "",
    password: ""
  };
  showDiv: boolean = false;
  windowWidth: number;

  inputStatus: { [key: string]: InputStatus } = {
    username: { errorMessage: '', status: false },
    password: { errorMessage: '', status: false },
  };


  constructor(private modalService: ModalService, private publicService: PublicService ) {
      this.windowWidth = window.innerWidth; 
   }

  openRegisterPage() {
    this.modalService.open();
  } 

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1250) {
      this.showDiv = true;
    } else {
      this.showDiv = false;
    }
  }

  loginUser() {
    this.resetInputStatus();
    this.publicService.loginUser(this.loginFormsModel, this.inputStatus);
  }

  resetInputStatus() {
    this.inputStatus = {
      username: { errorMessage: '', status: false },
      password: { errorMessage: '', status: false },
    };
  }

}
