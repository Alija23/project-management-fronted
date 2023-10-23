import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './page-not-found/not-found.component';
import { LoginPageComponent } from './public/login-page/login-page.component';

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent, loadChildren: () => import('./public/public-module/public.module').then((m) => m.PublicModule), },
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
