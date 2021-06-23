import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseUpdateComponent } from './house/house-update/house-update.component';
import { DetailComponent } from './house/detail/detail.component';
import { CreateComponent } from './category/create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './category/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './category/edit/edit.component';
import { DeleteComponent } from './category/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseUpdateComponent,
    DetailComponent,
    CreateComponent,
    DashboardComponent,
    ListComponent,
    EditComponent,
    DeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
