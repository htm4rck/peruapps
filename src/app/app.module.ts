import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { Page404Component } from './components/page404/page404.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataAppService } from './service/data-app.service';
import { ModaluserComponent } from './components/modaluser/modaluser.component';
import { FormsModule } from '@angular/forms';
import { ResponseComponent } from './components/response/response.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ListComponent,
    DetailComponent,
    Page404Component,
    ModaluserComponent,
    ResponseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [DataAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
