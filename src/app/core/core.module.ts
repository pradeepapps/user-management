import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendHttpInterceptor } from './fake-backend-http.interceptor';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  providers: [
    fakeBackendHttpInterceptor
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
