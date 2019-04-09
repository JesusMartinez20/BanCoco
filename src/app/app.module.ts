import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { TransactionsComponent } from './transactions/transactions.component';
import {MatPaginatorModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { LoginUserLogInComponent } from './login/login-user-log-in/login-user-log-in.component';
import { SingupRegisterComponent } from './login/singup-register/singup-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCocoinsComponent } from './update-cocoins/update-cocoins.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoginUserLogInComponent,
    SingupRegisterComponent,
    UpdateCocoinsComponent,
    TransactionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatComponentsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
