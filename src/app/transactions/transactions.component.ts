import {Component, OnInit} from '@angular/core';
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

