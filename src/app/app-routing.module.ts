import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './page-not-found/not-found.component';
import { LoginPageComponent } from './public/login-page/login-page.component';
import { ViewComponent } from './admin/view/view.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/module-routing/admin.module').then((m) => m.AdminModule),},
  { path: 'login-page', component: LoginPageComponent, loadChildren: () => import('./public/module-routing/public.module').then((m) => m.PublicModule), },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
