import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UpdateCocoinsService } from  './../../services/login.service';

@Component({
  selector: 'app-update-cocoins',
  templateUrl: './update-cocoins.component.html',
  styleUrls: ['./update-cocoins.component.css']
})
export class UpdateCocoinsComponent implements OnInit {
  urlP=""

  constructor(private http:UpdateCocoinsService) { }
  Update : FormGroup;
  ngOnInit() {
    this.Update = new FormGroup({
      fondos: new FormControl(),
  });
  }
  public card = { 
    Nickname: 'Usuario de prueba', 
    Tarjeta: 'XXXX XXXX XXXX XXXX', 
    Fondos: '1',
    Image: ''
  }
  onSubmit(){
    console.log(this.Userlogin.value)
    let form = JSON.stringify(this.Userlogin.value)
    console.log(form);
    this.http.url=this.urlP;
    this.http.postMethod(form);
  }
}
