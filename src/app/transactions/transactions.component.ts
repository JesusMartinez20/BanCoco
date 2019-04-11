import {Component, OnInit} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import { ViewChild, AfterViewInit } from '@angular/core';
// import {MatPaginator, MatSort} from '@angular/material';
// import {merge, Observable, of as observableOf} from 'rxjs';
// import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { STransactionsService } from '../services/s-transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'price', 'status', 'description', 'institution'];
  dataSource: any;

  constructor (private data: STransactionsService) { }

  ngOnInit() {
    this.data.getMethod().subscribe(data => {
        this.dataSource = data;
        console.log(this.dataSource);
      }
    );
  }
}

