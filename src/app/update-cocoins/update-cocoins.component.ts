import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UpdateCocoinsService } from '../services/update-cocoins.service';

@Component({
  selector: 'app-update-cocoins',
  templateUrl: './update-cocoins.component.html',
  styleUrls: ['./update-cocoins.component.css']
})
export class UpdateCocoinsComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'tarjeta', 'fondos'];
  urlP="";
  form;
  datosUsuario = [];
  private id: number;
  private sId: string;

  constructor(private http: UpdateCocoinsService) {
    this.sId = localStorage.getItem('id');
    this.id = parseInt(this.sId, 10);
  }
  Update: FormGroup;
  ngOnInit() {
    this.http.getMethod(this.id).subscribe(data => {
        this.datosUsuario = [];
        this.datosUsuario.push(data);
        console.log(this.datosUsuario);
      }
    );
    this.Update = new FormGroup({
      fondos: new FormControl()
    });
  }

  onSubmit(){
    console.log(this.Update.value);
    let form = JSON.stringify(this.Update.value);
    console.log(form);
    this.http.postUrl=this.urlP;
    this.http.postMethod(form);
    window.location.reload();
  }
}
