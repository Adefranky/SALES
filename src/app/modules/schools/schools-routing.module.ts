import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { DetailsComponent } from './details/details.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [

  { path: '', component: CollectionsComponent},
  { path: 'details', component: DetailsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
