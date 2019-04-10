import {Component, OnInit} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import { ViewChild, AfterViewInit } from '@angular/core';
// import {MatPaginator, MatSort} from '@angular/material';
// import {merge, Observable, of as observableOf} from 'rxjs';
// import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { STransactionsService } from '../services/s-transactions.service';

export interface Payment {
  date: string;
  price: number;
  status: string;
  description: string;
  institution: string;
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'price', 'status', 'description', 'institution'];
  dataSource = Object;
  userId = 1;

  constructor (private data: STransactionsService) { }


  ngOnInit() {
    this.data.postMethod(this.userId);
    this.data.getMethod().subscribe(data => {
        this.dataSource = data
      }
    );
  }

}

// export interface PAYMENT_DATA {
//   date: string;
//   price: number;
//   status: string;
//   description: string;
//   institution: string;
// }

// const PAYMENT_DATA: Payment[] = [
//   {date: 'Mar 31, 2019', price: 200, status: 'payed', description: 'House', institution: 'Houses.com'},
//   {date: 'Mar 30, 2019', price: 407, status: 'payed', description: 'Food', institution: 'Food.com'},
//   {date: 'Mar 29, 2019', price: 15, status: 'payed', description: 'Car', institution: 'Cars.com'},
// ];
