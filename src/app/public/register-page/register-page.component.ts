import { Component, Input } from '@angular/core';
import { RegisterFormModel } from '../model/register-form-model';
import { PublicService } from '../service/public.service';
import { ModalService } from '../modal/modal-service';
import { ErrorResponseModel, InputStatus } from '../model/error-model';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
 
  registerPageModel: RegisterFormModel = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    userRole: {
      title: ""
    }
  };

  inputStatus: { [key: string]: InputStatus } = {
    username: { errorMessage: '', status: false },
    password: { errorMessage: '', status: false },
    email: { errorMessage: '', status: false },
    title: { errorMessage: '', status: false }
  };
 

  constructor(public publicService: PublicService, public modalService: ModalService) {

  }

  registerUser() {
    this.resetInputStatus();
    this.publicService.registerUser(this.registerPageModel, this.inputStatus);
    
  }
  resetInputStatus() {
    this.inputStatus = {
      username: { errorMessage: '', status: false },
      password: { errorMessage: '', status: false },
      email: { errorMessage: '', status: false },
      title: { errorMessage: '', status: false }
    };
 
  }
}
