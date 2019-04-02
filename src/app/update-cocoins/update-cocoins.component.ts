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
    User: 'Usuario de prueba', 
    AccountNumber: 'Cuenta de prueba', 
    CardNumber: 'XXXX XXXX XXXX XXXX', 
    TotalCocoins: '1',
  }
}
