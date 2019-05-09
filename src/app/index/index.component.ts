import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {
    this.openSnackBar();
  }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.open('Profe no nos repruebe porfas', 'Interesante', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
}
