import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerPaymentComponent} from './customer-payment/customer-payment.component';
import {CustomerHomeComponent} from './customer-home/customer-home.component';


const routes: Routes = [
  {
    path: '', component: CustomerHomeComponent, children: [
      {path: 'payment', component: CustomerPaymentComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
