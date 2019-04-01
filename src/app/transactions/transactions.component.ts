import {Component, OnInit} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import { ViewChild, AfterViewInit } from '@angular/core';
// import {MatPaginator, MatSort} from '@angular/material';
// import {merge, Observable, of as observableOf} from 'rxjs';
// import {catchError, map, startWith, switchMap} from 'rxjs/operators';
// import {DataService} from '../data.service';

/*@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})*/

/*
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
}*/

/*export class TransactionsComponent implements AfterViewInit {
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDatabase | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.exampleDatabase = new ExampleHttpDatabase(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  first_name: string;
  last_name: string;
  avatar: string;
}

/!** An example database that the data source uses to retrieve data for the table. *!/
export class ExampleHttpDatabase {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      'https://reqres.in/api/users';

    return this.http.get<GithubApi>(requestUrl);
  }
}*/

export interface Payment {
  date: string;
  position: number;
  price: number;
}

const PAYMENT_DATA: Payment[] = [
  {position: 1, date: 'Mar 31, 2019', price: 200},
  {position: 2, date: 'Mar 30, 2019', price: 407},
  {position: 3, date: 'Mar 29, 2019', price: 15},
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent {
  displayedColumns: string[] = ['position', 'date', 'price'];
  dataSource = PAYMENT_DATA;
}

