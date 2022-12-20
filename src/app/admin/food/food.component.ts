import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private service:FoodsService,private route:ActivatedRoute,private router:Router) { }
food:Food|undefined
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{
        const id=params.get('id')
        if(id){
          this.service.getFoodById(id).subscribe(
            response=>{
              this.food=response
            }
          )
        }
       
      }
    )
  }

}
