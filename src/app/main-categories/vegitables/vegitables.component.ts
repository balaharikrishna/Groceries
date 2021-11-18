import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServicesService } from 'src/app/Services/category-services.service';
import { FormGroup  } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vegitables',
  templateUrl: './vegitables.component.html',
  styleUrls: ['./vegitables.component.css']
})
export class VegitablesComponent implements OnInit {

  constructor(private _stdservice:CategoryServicesService , private router:Router) { }

  Brinjalform:any;
  Capsicumform:any;
  Carrotsform:any;
  Onionsform:any;
  Potatoesform:any;
  Tomatoesform:any;
  

  ngOnInit(): void {
    this.Brinjalform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.Capsicumform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.Carrotsform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this. Onionsform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this. Potatoesform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.Tomatoesform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })

  }

  BrinjalSubmit(){
    localStorage.setItem("Brinjal",JSON.stringify(this.Brinjalform.value));
  }
  CapsicumSubmit(){
    localStorage.setItem("Capsicum",JSON.stringify(this.Capsicumform.value));
  }
  CarrotsSubmit(){
    localStorage.setItem("Carrots",JSON.stringify(this.Carrotsform.value));
  }
  OnionsSubmit(){
    localStorage.setItem("Onions",JSON.stringify(this.Onionsform.value));
  }
  PotatoesSubmit(){
    localStorage.setItem("Potatoes",JSON.stringify(this.Potatoesform.value));
  }
  TomatoesSubmit(){
    localStorage.setItem("Tomatoes",JSON.stringify(this.Tomatoesform.value));
  }

  BacktoHome(){
    this.router.navigate(['/Home'])
  }
}
