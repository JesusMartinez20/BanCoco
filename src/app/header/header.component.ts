import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {RegisterDialogComponent} from "../register-dialog/register-dialog.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private dialog: MatDialog,
              public loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  openLogIn() {
    const dialog = this.dialog.open(LoginDialogComponent);
  }

  logout() {
    this.loginService.logout();
  }

  openRegister() {
    const dialog = this.dialog.open(RegisterDialogComponent);
  }
}
