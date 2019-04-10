import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-cocoins',
  templateUrl: './update-cocoins.component.html',
  styleUrls: ['./update-cocoins.component.css']
})
export class UpdateCocoinsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public card = { 
    Nickname: 'Usuario de prueba', 
    Tarjeta: 'XXXX XXXX XXXX XXXX', 
    Fondos: '1',
    Image: ''
  }
}
