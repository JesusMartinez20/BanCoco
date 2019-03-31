import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {DataService} from '../data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTransaction().subscribe(data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }
}

