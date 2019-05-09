import {Component, OnInit} from '@angular/core';
import {UpdateCocoinsService} from '../services/update-cocoins.service';
import {merge, Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-update-cocoins',
  templateUrl: './update-cocoins.component.html',
  styleUrls: ['./update-cocoins.component.css']
})
export class UpdateCocoinsComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'tarjeta', 'fondos'];
  datosUsuario: Observable<any[]>;
  cocoinsForm: FormGroup;

  constructor(private updateCocoinsService: UpdateCocoinsService,
              private formBuilder: FormBuilder,
              private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.cocoinsForm = new FormGroup({
      fondos: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
    this.datosUsuario = this.updateCocoinsService.user.pipe(shareReplay(1));
  }

  updateData() {
    const newData = this.updateCocoinsService.user.pipe(shareReplay(1));
    this.datosUsuario = merge(this.datosUsuario, newData);
  }

  addCocoins() {
    this.cocoinsForm.markAsDirty();
    if (this.cocoinsForm.valid) {
      this.updateCocoinsService.addCocoins(this.cocoinsForm.get('fondos').value).subscribe(r => {
        this.snackbar.open('Fondos agregados correctamente', 'OK', {duration: 2000});
        this.updateData();
      }, error => {
        this.snackbar.open('No se pudieron agregar fondos', 'OK', {duration: 2000});
      });
    }
  }
}
