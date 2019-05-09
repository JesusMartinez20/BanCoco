import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatComponentsModule} from './mat-components/mat-components.module';
import {TransactionsComponent} from './transactions/transactions.component';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSnackBar,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {LoginUserLogInComponent} from './login/login-user-log-in/login-user-log-in.component';
import {SingupRegisterComponent} from './login/singup-register/singup-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateCocoinsComponent} from './update-cocoins/update-cocoins.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpConfigInterceptor} from './interceptor/HttpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoginUserLogInComponent,
    SingupRegisterComponent,
    TransactionsComponent,
    UpdateCocoinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatComponentsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule, MatButtonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
