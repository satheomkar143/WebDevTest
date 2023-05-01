import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HeaderCategoryComponent } from './header-category/header-category.component';

const routes: Routes = [
  {path:"", component:HeaderCategoryComponent},
  {path:"restaurantDetail/:id", component:RestaurantDetailComponent},
  {path:"restaurant", component:RestaurantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
