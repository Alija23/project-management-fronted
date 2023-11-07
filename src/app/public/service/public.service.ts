import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, pipe } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { LoginFormModel } from '../model/login-form-model';
import { RegisterFormModel } from '../model/register-form-model';
import { ErrorResponseModel, InputStatus, StatusField } from '../model/error-model';
import { ModalService } from '../modal/modal-service';
import { UserModel } from '../model/user-model';

@Injectable()
export class PublicService {
  private loginUrl= 'http://localhost:4200/api/login';
  private registerUrl= 'http://localhost:4200/api/guest/save-user';
  
  httpOptionsurlencoded = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
  }

  httpOptionsJson = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  }
 
  user: UserModel = {
    username: "",
    email: "",
    role: "",
    id: 0
  }
  constructor(private http: HttpClient, private router: Router, private modalService: ModalService) { }
  
  loginUser(myForm: LoginFormModel, status: { [key: string]: InputStatus }) {
    const body = new HttpParams()
    .set('username', myForm.username)
    .set('password', myForm.password);

    this.http.post(this.loginUrl, body.toString(),  this.httpOptionsurlencoded).subscribe(
      {
        next: (data) => {
          this.user = data as UserModel;
          console.log(this.user);
          this.router.navigateByUrl("/admin");          
        }
      , error: (err) => {
          
            console.log(err);
        for (const statusField of err.error) {
            if (statusField.fieldName === 'username') {
              status['username'].status = true;
              status['username'].errorMessage = statusField.errorMessage; 
            }
            if (statusField.fieldName === 'password') {
              status['password'].status = true; 
              status['password'].errorMessage = statusField.errorMessage; 
            } 
          } 
        }
      } 
    );
  }

  registerUser(registerForm: RegisterFormModel, status: { [key: string]: InputStatus } ) {   
    this.http.post(this.registerUrl, registerForm, this.httpOptionsJson).subscribe(
       {
        next: (data) => {
          this.modalService.close();
        }
      , error: (err) => {
          for (const statusField of err.error.status) {
            if (statusField.fieldName === 'username') {
              status['username'].status = true;
              status['username'].errorMessage = statusField.errorMessage; 
            }
            if (statusField.fieldName === 'password') {
              status['password'].status = true; 
              status['password'].errorMessage = statusField.errorMessage; 
            }
            if (statusField.fieldName === 'email') {
                status['email'].status =  true;
                status['email'].errorMessage = statusField.errorMessage; 
            } 
            if (statusField.fieldName === 'userRole') {
                status['title'].status = true,
                status['title'].errorMessage = statusField.errorMessage;
            } 
          }
        }
      }
    );
  } 
}

