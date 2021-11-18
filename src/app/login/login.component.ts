import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { GroceryServiceService } from '../grocery-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router , private _activatedRouter:ActivatedRoute , public _serverlogin: GroceryServiceService ) { }

  myform:any;
  ngOnInit(): void {
  this.myform = new FormGroup({
    email : new FormControl(null , [Validators.required ,Validators.email, this.emailvalidation ,this.email1validation] , this.validateEmail),
    password : new FormControl(null, [Validators.required]),
    checkbox : new FormControl(null ,  [Validators.requiredTrue])
    
  })
  };

  emailvalidation(control : FormControl){
    if(control.value  == "balasaikrishna1997@gmail.com"){
             return{'NotAllowed' : true};
    }
    return null;

  }

  email1validation(control : FormControl){
    if(control.value =="prashanth1996@gmail.com"){
      return{'1NotAllowed' : true};
    }
    return null;

  }
  
   validateEmail(control:AbstractControl) :Promise<any> {
     const checkData = new Promise<any>((resolve,reject) =>{
       if(control.value == 'srikanth@gmail.com'){
         resolve({'Duplicate' : true});
       }else{
         resolve(null)
       }
     });
     return checkData;
   } 


  emailaddress:any;
  mysubmit(){
    this._serverlogin.serverdata().subscribe(
      data => {
        this.emailaddress=data 
        if(this.emailaddress.email==this.myform.value.email)
        {
          sessionStorage.setItem('token', this.emailaddress.email)
          this._router.navigate(['/Home']) 
        }
      }
    )
  }  

 /* 
 passwordfS:any;
  mysubmit(){
    this._serverlogin.serverdata().subscribe(
      data => {
        this.emailaddress && this.passwordfS = data 
        if(this.emailaddress.email==this.myform.value.email && this.passwordfS.password ==this.myform.value.password)
        {
          this._router.navigate(['/Home'])
        }
      }
    )
  } */
  
 /* mysubmit(){
    this._router.navigate(['/Home'])
  } */
  

  
  

}

