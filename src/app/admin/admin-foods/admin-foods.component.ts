import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-admin-foods',
  templateUrl: './admin-foods.component.html',
  styleUrls: ['./admin-foods.component.css']
})
export class AdminFoodsComponent implements OnInit {

  foods:Food[]=[]
  constructor(private service:FoodsService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllFoods().subscribe(
      resp=>{
       this.foods=resp
     
      }
    )
  }
  onDelete(id:string|undefined){
    this.service.deleteFood(id).subscribe(
      response=>{
        
        alert('deleted successfully')
      }
    )
    this.router.navigate(['/admin/foods'])
  }
}
