import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { MatComponentsModule } from './mat-components/mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    MatComponentsModule
=======

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> refs/remotes/origin/master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
