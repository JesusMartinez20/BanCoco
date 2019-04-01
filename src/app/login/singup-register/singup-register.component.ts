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
        Name: new FormControl(),
        Lastname: new FormControl(),
        User: new FormControl(),
        Password: new FormControl(),
        Confirmation: new FormControl(),
        Email: new FormControl(),
        CP: new FormControl(),
        Municipality: new FormControl(),
        Address: new FormControl(),
        State: new FormControl(),
        Card: new FormControl(),
        CVV: new FormControl()
    });

  }
  onSubmit(){
    console.log(this.Usersingup.value)
  }

}
