import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { OverviewComponent } from './overview/overview.component';
import { SignupsComponent } from './signups/signups.component';
import { TargetsComponent } from './targets/targets.component';

const routes: Routes = [

  { path: '', component: InvoicesComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'signups', component: SignupsComponent },
  { path: 'targets', component: TargetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
