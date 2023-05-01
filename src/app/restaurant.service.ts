import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private _http:HttpClient) { }

  baseURL = "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/"

  // get all Restaurant
  public getAllResto(){
    return this._http.get(this.baseURL+"allRestaurants")
  }

  // get single Restaurant
  public getSingleResto(id:any){
    return this._http.get(this.baseURL+"allRestaurants/"+id)
  }

  // get all restaurant Details
  public getAllRestaurantDetails(){
    return this._http.get(this.baseURL+"restaurantDetails")
  }

  // get single restaurant Details
  public getSingleRestaurantDetails(id:any){
    return this._http.get(this.baseURL+"restaurantDetails/"+id)
  }

  // get all menu
  public getAllMenuDetails(){
    return this._http.get(this.baseURL+"menu")
  }

  // get all menu corresponds to restaurant name
  public getAllMenuDetailsByRestoName(name:any){
    let menu:any=[];
    let sortedMenu :any=[];
    this.getAllMenuDetails().subscribe((data:any) => {
      menu = data.menu;
      sortedMenu = menu.filter((item:any) => item.restaurantName.includes(name));
      return sortedMenu;
    })
  }
}
