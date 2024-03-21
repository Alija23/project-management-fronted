import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test/test.component';
import { NotFoundComponent } from './page-not-found/not-found.component';
import { PublicService } from './public/service/public.service';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NotFoundComponent,
 ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [PublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// playing around
