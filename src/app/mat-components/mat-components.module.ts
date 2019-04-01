import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatSelectModule 
  ]
})
export class MatComponentsModule { }
