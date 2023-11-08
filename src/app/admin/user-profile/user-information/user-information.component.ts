import { Component } from '@angular/core';
import { PublicService } from 'src/app/public/service/public.service';
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent {
  statusInfoUser: boolean = false;
 
  constructor(private publicService: PublicService) {

  }
  
  openUserInfo() {
    this.statusInfoUser = true;
  }
  closeUserInfo() {
    this.statusInfoUser = false;
  } 

  openNotifications() {

  }
  closeNotifications() {

  }

  returnUsername() {
      return this.publicService.user.username.toUpperCase();
  }
  returnEmail() {
        return this.publicService.user.email;
    }
  returnRole() {
      return this.publicService.user.role.title;
  }
  returnId() {
      return this.publicService.user.rid;
  }
}
