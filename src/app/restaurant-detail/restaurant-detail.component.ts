import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private _router:Router, private _actRoute:ActivatedRoute, private _restoServ:RestaurantService) { }

  ngOnInit(): void {
    this.id = this._actRoute.snapshot.paramMap.get("id")
    this.getRestaurant(this.id)
  }
  id:any
  restaurantDetail:any={}
  restaurantMenu:any=[]
  foods:any=[]
  bakedFoods:any=[]
  sweetFoods:any=[]
  hotFoods:any=[]

  getRestaurant(id:any){
    this._restoServ.getSingleRestaurantDetails(id).subscribe((data:any)=>{
      this.restaurantDetail =data.restaurantDetail
      this.restaurantDetail.openingHours = this.restaurantDetail.openingHours.split(",")
      this.getRestaurantMenu(this.restaurantDetail.restaurantName)
    })
  }

  getRestaurantMenu(name:any){
    this._restoServ.getAllMenuDetails().subscribe((data:any)=>{
      let menu = data.menu;
      this.restaurantMenu = menu.filter((item:any) => item.restaurantName.includes(name));
      this.foods = this.restaurantMenu
      this.foodCategory()
    })
  }

  foodCategory(){
    this.bakedFoods = this.restaurantMenu.filter((item:any) => item.itemCategory.includes("Baked"))
    this.sweetFoods = this.restaurantMenu.filter((item:any) => item.itemCategory.includes("Sweet"))
    this.hotFoods = this.restaurantMenu.filter((item:any) => item.itemCategory.includes("Hot Dish"))
  }

  selectedIndex =1;

  setActive(i:number){
    this.selectedIndex =i;
  }

  allFoods(){
    this.foods = this.restaurantMenu
  }

  selectedFood(food:any){
    switch(food){
      case "Hot Dish":
        this.foods = this.hotFoods
        break
      case "Sweet" :
        this.foods = this.sweetFoods
        break
      case "Baked":
        this.foods = this.bakedFoods
        break
      default:
        this.foods = this.restaurantMenu
    }
  }

}
