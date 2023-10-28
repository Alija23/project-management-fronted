import { Component, Input } from '@angular/core';
import { RegisterFormModel } from './model/register-form-model';
import { PublicService } from '../service/public.service';
import { ModalService } from '../modal/modal-service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  isErrorResponse:  RegisterFormModel = {
    username: "dag",
    password: "",
    confirmPassword: "",
    email: "",
    userRole: {
      title: ""
    }
  };

  registerPageModel: RegisterFormModel = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    userRole: {
      title: ""
    }
  };

  constructor(public publicService: PublicService, public modalService: ModalService) {

  }

  registerUser() {
    this.publicService.registerUser(this.registerPageModel, this.isErrorResponse);
  }
}
