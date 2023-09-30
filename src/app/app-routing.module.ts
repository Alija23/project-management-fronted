import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestRoutingModule } from './guest/guest-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
