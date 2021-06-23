import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './category/create/create.component';
import { DeleteComponent } from './category/delete/delete.component';
import { EditComponent } from './category/edit/edit.component';
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
  },
  {
    path: 'admin/category/:id/edit',
    component: EditComponent
  },
  {
    path: 'admin/category/:id/delete',
    component: DeleteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
