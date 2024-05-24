import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { TargetsComponent } from './targets/targets.component';
import { SignupsComponent } from './signups/signups.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { MatCardModule } from '@angular/material/card';
// import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    OverviewComponent,
    TargetsComponent,
    SignupsComponent,
    InvoicesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    // ChartsModule
  ]
})
export class DashboardModule { }
