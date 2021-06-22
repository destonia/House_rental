import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseUpdateComponent } from './house/house-update/house-update.component';
import { DetailComponent } from './house/detail/detail.component';
import { CreateComponent } from './category/create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseUpdateComponent,
    DetailComponent,
    CreateComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
