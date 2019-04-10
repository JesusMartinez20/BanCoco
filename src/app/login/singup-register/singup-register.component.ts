import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-singup-register',
  templateUrl: './singup-register.component.html',
  styleUrls: ['./singup-register.component.css']
})
export class SingupRegisterComponent implements OnInit {

  constructor() { }

  Usersingup : FormGroup;
  ngOnInit() {
    this.Usersingup = new FormGroup({
        nombre: new FormControl(),
        apellidoPaterno: new FormControl(),
        apellidoMaterno: new FormControl(),
        nickname: new FormControl(),
        contrasena: new FormControl(),
        correo: new FormControl(),
        CP: new FormControl(),
        municipio: new FormControl(),
    });

  }
  onSubmit(){
    console.log(this.Usersingup.value)
  }

}
