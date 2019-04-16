import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-singup-register',
  templateUrl: './singup-register.component.html',
  styleUrls: ['./singup-register.component.css']
})
export class SingupRegisterComponent implements OnInit {
  urlP="/usuarios"
  
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private http:LoginService) { }

  Usersingup : FormGroup;
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
  onSubmit(){
    console.log(this.Usersingup.value)
    let form = JSON.stringify(this.Usersingup.value)
    console.log(form);
    this.http.url=this.urlP;
    localStorage.setItem('userId', '');
    localStorage.getItem('userId');
    this.http.createUser(form).subscribe(d => {let i=d.toString();localStorage.setItem('id',i)});
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
  }
}
