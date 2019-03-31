import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { TransactionsComponent } from './transactions/transactions.component';
import {MatPaginatorModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatComponentsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
