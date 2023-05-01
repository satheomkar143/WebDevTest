import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.css']
})
export class HeaderCategoryComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  searchInp=''
  searchResto(value:any){
    if(value){
      let queryParams = {resto:value}
      this.searchInp = ''
      this._router.navigate(['/'],{queryParams})
    }
  }

}
