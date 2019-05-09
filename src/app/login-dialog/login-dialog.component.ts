import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<LoginDialogComponent>,
              private loginService: LoginService,
              private snackbar: MatSnackBar,
              private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  doLogin() {
    this.loginForm.markAsDirty();
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(r => {
        this.dialogRef.close();
        this.router.navigate(['/transactions']);
      }, err => {
        this.snackbar.open('No se pudo iniciar sesión', 'OK', {duration: 2000});
      })
    }
  }
}
