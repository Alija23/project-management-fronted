import { Component } from '@angular/core';
import { LoginFormModel } from './model/login-form-model';
import { PublicService } from '../../service/public.service';

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

  constructor(private publicService: PublicService ) { }

  onSubmit() {
  }

}
