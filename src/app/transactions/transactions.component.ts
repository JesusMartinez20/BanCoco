import {Component, OnInit} from '@angular/core';
import { STransactionsService } from '../services/s-transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'price', 'status', 'description', 'institution'];
  dataSource: any = [];
  private sId: string;
  private id: number;

  constructor (private transactionsService: STransactionsService) {
    this.sId = localStorage.getItem('id');
    this.id = parseInt(this.sId, 10);
  }

  ngOnInit() {
    this.dataSource = this.transactionsService.transactions;
    /*
    this.data.getMethod(this.id).subscribe(data => {
        this.dataSource = data;
        console.log(this.dataSource);
      }
    );
    */

  }
}

