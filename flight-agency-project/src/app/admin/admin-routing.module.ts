import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportComponent} from "./report/report.component";


const routes: Routes = [
  {path: 'report', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
