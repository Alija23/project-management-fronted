import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, pipe } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { LoginFormModel } from '../login-page/form/model/login-form-model';
import { RegisterFormModel } from '../register-page/model/register-form-model';

@Injectable(
  { providedIn: 'root'}
)
export class PublicService {
  private loginUrl= 'http://localhost:4200/api/login';
  private registerUrl= 'http://localhost:4200/api/user-data-admin/save-user'

  httpOptionsurlencoded = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
  }

  httpOptionsJson = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  }
  
  constructor(private http: HttpClient, private router: Router) { }
  
  loginUser(myForm: LoginFormModel) {
    const body = new HttpParams()
    .set('username', myForm.username)
    .set('password', myForm.password);

    this.http.post(this.loginUrl, body.toString(),  this.httpOptionsurlencoded).subscribe(
      {
        next: (data) => {
          
        }
      , error: (err) => {
        }
      } 
    );
  }

  registerUser(registerForm: RegisterFormModel, isErrorResponse: RegisterFormModel) {   
    this.http.post(this.registerUrl, registerForm, this.httpOptionsJson).subscribe(
       {
        next: (data) => {
          isErrorResponse= data as RegisterFormModel;

        }
      , error: (err) => {
        isErrorResponse.username = err.fieldName;
        isErrorResponse.password = err.password;
        isErrorResponse.confirmPassword = err.confirmPassword;
        isErrorResponse.email = err.email;
        isErrorResponse.userRole.title = err.userRole.title;
      }
      }
    );

     } 
}

