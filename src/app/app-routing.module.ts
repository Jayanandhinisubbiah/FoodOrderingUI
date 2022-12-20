import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddFoodComponent } from './admin/admin-add-food/admin-add-food.component';
import { AdminFoodsComponent } from './admin/admin-foods/admin-foods.component';
import { AdminViewFoodComponent } from './admin/admin-view-food/admin-view-food.component';
import { FoodComponent } from './admin/food/food.component';

const routes: Routes = [
  {
    path:'' ,redirectTo:'/admin/foods',pathMatch:'full'
  },
  {
    path:'food/:id',
    component:FoodComponent
  },
  {
    path:'admin/foods',
    component:AdminFoodsComponent
  },
  {
    path:'admin/food/add',
    component:AdminAddFoodComponent
  },
  {
    path:'admin/food/:id',
    component:AdminViewFoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
