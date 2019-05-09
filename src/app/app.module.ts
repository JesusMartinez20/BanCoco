import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatComponentsModule} from './mat-components/mat-components.module';
import {TransactionsComponent} from './transactions/transactions.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateCocoinsComponent} from './update-cocoins/update-cocoins.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpConfigInterceptor} from './interceptor/HttpInterceptor';
import {IndexComponent} from "./index/index.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';

@NgModule({
  entryComponents: [
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionsComponent,
    UpdateCocoinsComponent,
    IndexComponent,
    LoginDialogComponent,
    RegisterDialogComponent
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
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule
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
