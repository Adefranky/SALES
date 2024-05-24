import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  {
    path: 'dashboard',    
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },  

  {
    path: 'schools',    
    loadChildren: () =>
      import('./modules/schools/schools.module').then(
        (m) => m.SchoolsModule
      ),
  },  

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
