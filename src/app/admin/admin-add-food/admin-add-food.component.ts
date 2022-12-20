import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-admin-add-food',
  templateUrl: './admin-add-food.component.html',
  styleUrls: ['./admin-add-food.component.css']
})
export class AdminAddFoodComponent implements OnInit {

  constructor(private service:FoodsService,private router:Router) { }
food:Food={

categoryName:'',
foodName:'',
price:'',
image:'',
detail:''
}
  ngOnInit(): void {
  }
onSubmit():void{
  this.service.addFood(this.food).subscribe(
    response=>{
      alert('success')
    }
  )
  this.router.navigate(['/admin/foods'])
}
}
