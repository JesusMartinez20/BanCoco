import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {TransactionsComponent} from './transactions/transactions.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Transactions', component: TransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
