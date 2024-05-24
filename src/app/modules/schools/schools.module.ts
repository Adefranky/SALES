import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CollectionsComponent } from './collections/collections.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    InvoicesComponent,
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    RouterModule,
    MatTableModule
  ]
})
export class SchoolsModule { }
