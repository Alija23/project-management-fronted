import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from '../view/view.component';
import { DashboardComponent } from '../workspace/dashboard/dashboard.component';
import { UserManagmentComponent } from '../workspace/user-managment/user-managment.component';
import { TaskManagmentComponent } from '../workspace/task-managment/task-managment.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user-management', component: UserManagmentComponent },
      { path: 'task-management', component: TaskManagmentComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
