import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryServiceService {

  

  constructor(public httpservice:HttpClient) {
    
   }

   serverdata(){
    return this.httpservice.get( 'http://localhost:3000/LoginDetails')
   }

   
   //------------------------------------Address crud Operation------------------------------//
 
   getDetails(){
    return this.httpservice.get( 'http://localhost:3000/Details')
  }
  
   
}
