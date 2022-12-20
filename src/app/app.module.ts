import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminFoodsComponent } from './admin/admin-foods/admin-foods.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminViewFoodComponent } from './admin/admin-view-food/admin-view-food.component'
import { FormsModule } from '@angular/forms';
import { AdminAddFoodComponent } from './admin/admin-add-food/admin-add-food.component';
import { FoodComponent } from './admin/food/food.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    AdminFoodsComponent,
    AdminViewFoodComponent,
    AdminAddFoodComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
