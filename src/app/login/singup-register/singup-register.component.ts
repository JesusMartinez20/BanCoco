import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {SignUpService} from '../../services/sign-up.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-singup-register',
  templateUrl: './singup-register.component.html',
  styleUrls: ['./singup-register.component.css']
})
export class SingupRegisterComponent implements OnInit {
  urlP = '/usuarios';

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private signUp: SignUpService, private snackbar: MatSnackBar, private router: Router) {
  }

  Usersingup: FormGroup;

  ngOnInit() {
    this.Usersingup = new FormGroup({
      nombre: new FormControl(),
      apellidoPaterno: new FormControl(),
      apellidoMaterno: new FormControl(),
      nickname: new FormControl(),
      contrasena: new FormControl(),
      confirmacion: new FormControl(),
      correo: new FormControl(),
      cp: new FormControl(),
      municipio: new FormControl(),
    });

  }

  onSubmit() {
    console.log(this.Usersingup.value);
    const form = JSON.stringify(this.Usersingup.value);
    console.log(form);
    localStorage.setItem('userId', '');
    localStorage.getItem('userId');
    this.signUp.createUser(form).subscribe(ok => {
      localStorage.setItem('token', ok.token);
      this.router.navigate(['Transactions']);
    }, error => {
      this.snackbar.open('No se pudo crear el usuario', 'OK', {duration: 2000});
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? '' :
      this.email.hasError('email') ? 'Correo invalido' :
        '';
  }

  private passwordsMatch = (_form: FormGroup): boolean => {
    if (_form.controls['contrasena'].touched && _form.controls['confirmacion'].touched) {
      if (_form.value.contrasena === _form.value.confirmacion) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  };
}
