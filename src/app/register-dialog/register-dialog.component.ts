import {Component, OnInit} from '@angular/core';
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {SignUpService} from "../services/sign-up.service";
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private dialogRef: MatDialogRef<RegisterDialogComponent>, private signUp: SignUpService, private snackbar: MatSnackBar, private router: Router) {
  }

  Usersingup: FormGroup;

  ngOnInit() {
    this.Usersingup = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidoPaterno: new FormControl('', Validators.required),
      apellidoMaterno: new FormControl('', Validators.required),
      nickname: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required),
      confirmacion: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      cp: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      municipio: new FormControl('', Validators.required),
    });

    this.Usersingup.get('confirmacion').setValidators(this.matchValidator('contrasena'))

  }

  onSubmit() {
    this.Usersingup.markAsDirty();
    console.log(this.Usersingup);
    if (!this.Usersingup.valid) {
      return;
    }
    console.log(this.Usersingup.value);
    const form = JSON.stringify(this.Usersingup.value);
    console.log(form);
    localStorage.setItem('userId', '');
    localStorage.getItem('userId');
    this.signUp.createUser(form).subscribe(ok => {
      console.log('creado');
      localStorage.setItem('token', ok.token);
      this.router.navigate(['transactions']);
      this.dialogRef.close();

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
      return _form.value.contrasena === _form.value.confirmacion;
    }
    return true;
  };

  matchValidator(otherComponent: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const repeatPasswordControl = control.root.get(otherComponent);
      return control.value !== repeatPasswordControl.value ? {'mismatch': {value: true}} : null;
    };
  }

  bla() {
    console.log('uwu');
  }
}
