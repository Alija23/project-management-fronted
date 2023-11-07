import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminService } from '../service/admin.service';

import { AdminRoutingModule } from './admin-routing.module';

import { ViewComponent } from '../view/view.component';
import { MenuComponent } from '../menu/menu.component';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { DashboardComponent } from '../workspace/dashboard/dashboard.component';
import { UserManagmentComponent } from '../workspace/user-managment/user-managment.component';
import { TaskManagmentComponent } from '../workspace/task-managment/task-managment.component';
import { TaskBoardComponent } from '../task-board/task-board.component';
import { TaskComponent } from '../task-board/task/task.component';
import { UserProfileComponent} from '../user-profile/user-profile.component';
import { SearchBarComponent } from '../user-profile/search-bar/search-bar.component';
import { UserInformationComponent } from '../user-profile/user-information/user-information.component';

@NgModule({
  declarations: [
    ViewComponent,
    MenuComponent,
    WorkspaceComponent,
    DashboardComponent,
    UserManagmentComponent,
    TaskManagmentComponent,
    TaskBoardComponent,
    TaskComponent,
    UserProfileComponent,
    SearchBarComponent,
    UserInformationComponent    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule {

 }
