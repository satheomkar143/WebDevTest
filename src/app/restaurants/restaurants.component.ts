import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

declare function hideFilter():any

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css', '../filters/filters.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private _restoService: RestaurantService, private _router:Router, private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._actRoute.queryParamMap.subscribe((params: any) => {
      let restoName = params.get('resto')

      if(restoName){
        this.allRestaurants = this.allRestaurants.filter((item:any) => item.restaurantName.toLowerCase().includes(restoName.toLowerCase()));
        if(!this.allRestaurants.length){
          this.allRestaurants = this.fetchedAllRestaurants
          alert("Restaurant not found")
        }
      }else{
        this.getAllResto()
      }
    })
  }

  allRestaurants:any;
  fetchedAllRestaurants:any

  getAllResto(){
    this._restoService.getAllResto().subscribe((data:any)=>{
      this.allRestaurants =data.allRestaurants;
      this.fetchedAllRestaurants = this.allRestaurants
    })
  }

  showDetails(id:any){
    this._router.navigate(['/restaurantDetail',id]);
  }

  isOpen=false
  isCuisine=false
  filteredCuisine:string=''

  applyFilter(){
    if(!this.isOpen && !this.isCuisine ){
      alert("Please apply filter first.")
    }else{
      this.allRestaurants = this.fetchedAllRestaurants.filter((item:any) => item.restaurantCuisine.includes(this.filteredCuisine));
      if(this.isOpen){
        this.allRestaurants = this.allRestaurants.filter((item:any) => item.isOpen);
      }
      hideFilter();
    }
  }

  toggleOpen(){
    this.isOpen = !this.isOpen
  }

  selectCuisine(name:string){
    this.isCuisine=true
    if(!(name=="All")){
      this.filteredCuisine = name
    }else{
      this.filteredCuisine = ''
    }
  }

}
