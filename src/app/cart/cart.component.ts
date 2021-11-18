import { Component, OnInit } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( public _serverlogin: GroceryServiceService  ) { }

  public data="";

  addressList : any;

  ngOnInit(): void {
   
     this._serverlogin.getDetails().subscribe(data => {this.addressList = data });
      
  }

  brinjal(){
    let data = JSON.parse(localStorage.getItem('Brinjal')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price *data.Qty
    return "Brinjal " +    data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }
  Capsicum(){
    let data = JSON.parse(localStorage.getItem('Capsicum')+'')
   if(data == null || data == undefined)
   {
    return null
   }
    let price = data.price *data.Qty
    return "Capsicum " +     data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }
   
  Carrots(){
    let data = JSON.parse(localStorage.getItem('Carrots')+'')
   if(data == null || data == undefined)
   {
    return null
   }
    let price = data.price *data.Qty
    return "Carrots " +    data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }
   // return localStorage.getItem('Carrots')
  
  Onions(){
    let data = JSON.parse(localStorage.getItem('Onions')+'')
   if(data == null || data == undefined)
   {
    return null
   }
    let price = data.price *data.Qty
    return "Onions " +   data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }
   // return localStorage.getItem('Onions')
  
  Potatoes(){
    let data = JSON.parse(localStorage.getItem('Potatoes')+'')
    if(data == null || data == undefined)
    {
     return null
    }
     let price = data.price *data.Qty
     return "Potatoes" +   data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
   // return localStorage.getItem('Potatoes')
  }
  Tomatoes(){
    let data = JSON.parse(localStorage.getItem('Tomatoes')+'')
    if(data == null || data == undefined)
    {
     return null
    }
     let price = data.price *data.Qty
     return "Tomatoes" +    data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  
  }
   // return localStorage.getItem('Tomatoes')

   //---------------------------------------from here fruits---------------------------------------//
   

  Apples(){
    let data = JSON.parse(localStorage.getItem(' Apples')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price *data.Qty
    return " Apples" +    data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }

  Bananas(){
    let data = JSON.parse(localStorage.getItem(' Bananas')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price *data.Qty
    return " Bananas" +    data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }

  Mangoes(){
    let data = JSON.parse(localStorage.getItem(' Mangoes')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price *data.Qty
    return "Mangoes" +    data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }

  Oranges(){
    let data = JSON.parse(localStorage.getItem('Oranges')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price *data.Qty
    return "Oranges" +    data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }
  Pomegranates(){
    let data = JSON.parse(localStorage.getItem('Pomegranates')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price *data.Qty
    return "Pomegranates" +    data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }
  WaterMelons(){
    let data = JSON.parse(localStorage.getItem('WaterMelons')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price * data.Qty
    return "WaterMelons" +   data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }

  //----end of fruits---//

  //---------------------------------start of Stationary-----------------------------//

 

  Books(){
    let data = JSON.parse(localStorage.getItem('Books')+'')
    if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price * data.Qty
    return "Books" +   data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }

 FaceWash(){
    let data = JSON.parse(localStorage.getItem('FaceWash')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price * data.Qty
    return "FaceWash" +   data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }

  Shampoo(){
    let data = JSON.parse(localStorage.getItem('Shampoo')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price * data.Qty
    return "Shampoo" +   data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }

  Soap(){
    let data = JSON.parse(localStorage.getItem('Soap')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price * data.Qty
    return "Soap" +   data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }

  ToothBrush(){
    let data = JSON.parse(localStorage.getItem('ToothBrush')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price * data.Qty
    return "ToothBrush" +   data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }
 
  ToothPaste(){
    let data = JSON.parse(localStorage.getItem('ToothPaste')+'')
   if(data == null || data == undefined)
   {
    return null
  }
    let price = data.price * data.Qty
    return "ToothPaste" +   data.Qty+"(Qty)"+"X"+ data.price+"(price)" +" = " +  price+"rs";
  }

   //---------------------------------End of Stationary-----------------------------//

 
    


}
