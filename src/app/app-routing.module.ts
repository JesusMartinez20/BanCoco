import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransactionsComponent} from './transactions/transactions.component';
import {IndexComponent} from "./index/index.component";
import {UpdateCocoinsComponent} from "./update-cocoins/update-cocoins.component";
import {IsLoggedInGuard} from "./services/is-logged-in.guard";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {
    path: 'transactions', canActivate: [IsLoggedInGuard], children: [
      {path: '', component: TransactionsComponent},
      {path: 'cocoins', component: UpdateCocoinsComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
