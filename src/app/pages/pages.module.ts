import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PageErrorComponent,
    DashboardComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    PageErrorComponent,
    DashboardComponent,
    AccountComponent
  ]
})
export class PagesModule { }
