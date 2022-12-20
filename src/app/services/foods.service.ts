import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Food} from '../models/food.model'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class FoodsService {
 
  constructor(private http:HttpClient) { }
  apiBaseUrl=environment.apiBaseUrl
  getAllFoods():Observable<Food[]>{
    return this.http.get<Food[]>(this.apiBaseUrl+'/api/Foods')
  }
  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(this.apiBaseUrl+'/api/Foods/'+foodId)
  }
  updateFoodbyId(foodId:string|undefined,updateFoodRequest:Food):Observable<Food>{
    return this.http.put<Food>(this.apiBaseUrl+'/api/Foods/'+foodId,updateFoodRequest)
  }
  addFood(food:Food):Observable<Food>{
return this.http.post<Food>(this.apiBaseUrl+'/api/Foods',food)
  }
  deleteFood(id:string|undefined):Observable<Food>{
    return this.http.delete<Food>(this.apiBaseUrl+'/api/Foods/'+id)
   
  }
}
