import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './category/create/create.component';
import { ListComponent } from './category/list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'admin/category/create',
    component: CreateComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'admin/category',
    component: ListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
