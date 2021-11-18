import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryServicesService } from 'src/app/Services/category-services.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor(private _stdservice:CategoryServicesService , private router:Router) { }

  Applesform:any;
  Bananasform:any;
  Mangoesform:any;
  Orangesform:any;
  Pomegranatesform:any;
  WaterMelonsform:any;


  ngOnInit(): void {
    this.Applesform= new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.Bananasform= new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.Mangoesform= new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this. Orangesform= new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this. Pomegranatesform= new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.WaterMelonsform= new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })

  }

  ApplesSubmit(){
    localStorage.setItem(" Apples",JSON.stringify(this. Applesform.value));
  }
  BananasSubmit(){
    localStorage.setItem("Bananas",JSON.stringify(this.Bananasform.value));
  }
  MangoesSubmit(){
    localStorage.setItem("Mangoes",JSON.stringify(this.Mangoesform.value));
  }
  OrangesSubmit(){
    localStorage.setItem("Oranges",JSON.stringify(this.Orangesform.value));
  }
  PomegranatesSubmit(){
    localStorage.setItem("Pomegranates",JSON.stringify(this.Pomegranatesform.value));
  }
  WaterMelonsSubmit(){
    localStorage.setItem("WaterMelons",JSON.stringify(this.WaterMelonsform.value));
  }

  

  BacktoHome(){
    this.router.navigate(['/Home'])
  }

}
