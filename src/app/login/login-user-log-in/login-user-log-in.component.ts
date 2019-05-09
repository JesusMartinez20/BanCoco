import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login-user-log-in',
  templateUrl: './login-user-log-in.component.html',
  styleUrls: ['./login-user-log-in.component.css']
})
export class LoginUserLogInComponent implements OnInit {
  urlP = '';
  posts;

  constructor(private loginService: LoginService,
              private router: Router,
              private snackbar: MatSnackBar) {
  }

  Userlogin: FormGroup;

  ngOnInit() {
    this.Userlogin = new FormGroup({
      cc: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.Userlogin.markAsDirty();
    console.log(this.Userlogin);
    const form = JSON.stringify(this.Userlogin.value);
    console.log(form);
    if (this.Userlogin.valid) {
      this.loginService
        .login(this.Userlogin.get('cc').value, this.Userlogin.get('cvv').value)
        .subscribe(ok => {
          localStorage.setItem('token', (ok as any).token);
          this.router.navigate(['Transactions']);
        }, error => {
          this.snackbar.open('Credenciales incorrectas', 'OK', {duration: 2000});
        });
    }
  }
}
