import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodsService } from 'src/app/services/foods.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-view-food',
  templateUrl: './admin-view-food.component.html',
  styleUrls: ['./admin-view-food.component.css']
})
export class AdminViewFoodComponent implements OnInit {
 
  constructor(private route:ActivatedRoute,private service:FoodsService,private router:Router,private toastr:ToastrService) { }
food:Food|undefined
  ngOnInit(): void {

// this.route.params.subscribe(
//   params=>{
//     const foodId=params['foodId']
//     if(foodId){
//       this.service.getFoodById(foodId).subscribe(
//         response=>{
//         this.food=response
//         }
//       )
//     }
//   }
// )

//   }
this.route.paramMap.subscribe(
  params=>{const foodId=params.get('id');
  
    if(foodId){
      this.service.getFoodById(foodId).subscribe(response=>{this.food=response;})
     
  }

}

)
 }
 

onSubmit():void{
  const updateFoodRequest:Food={
    foodId:this.food?.foodId,
categoryName:this.food?.categoryName,
foodName:this.food?.foodName,
price:this.food?.price,
image:this.food?.image,
detail:this.food?.detail
  }
  this.service.updateFoodbyId(this.food?.foodId,updateFoodRequest).subscribe(
    response=>
    {console.log(response)
      this.toastr.success('Updated Successfully');
    }
  )
  this.router.navigate(['/admin/foods'])
}
  onDelete(){
    this.service.deleteFood(this.food?.foodId).subscribe(
      response=>{
        
        alert('deleted successfully')
      }
    )
    this.router.navigate(['/admin/foods'])
  }
}


