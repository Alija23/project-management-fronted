import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, pipe } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { LoginFormModel } from '../login-page/form/model/login-form-model';
import { RegisterFormModel } from '../model/register-form-model';
import { ErrorResponseModel, InputStatus, StatusField } from '../model/error-model';

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

  registerUser(registerForm: RegisterFormModel, status: { [key: string]: InputStatus } ) {   
    this.http.post(this.registerUrl, registerForm, this.httpOptionsJson).subscribe(
       {
        next: (data) => {

        }
      , error: (err) => {
          for (const statusField of err.error.status) {
            if (statusField.fieldName === 'username') {
              status['username'] = {
                status: true,
                errorMessage: statusField.errorMessage
              }
            
                console.log(status['username']);
            }
            if (statusField.fieldName === 'password') {
              status['password'] = {
                  status: true,
                  errorMessage: statusField.errorMessage
              };
            }
            if (statusField.fieldName === 'email') {
              status['email'] = {
                  status: true,
                  errorMessage: statusField.errorMessage
              };
            
            }
            if (statusField.fieldName === 'title') {
              status['title'] = {
                  status: true,
                  errorMessage: statusField.errorMessage
              };
            
            }
          }
        }
      }
    );
  } 
}

