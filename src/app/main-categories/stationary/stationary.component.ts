import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryServicesService } from 'src/app/Services/category-services.service';

@Component({
  selector: 'app-stationary',
  templateUrl: './stationary.component.html',
  styleUrls: ['./stationary.component.css']
})
export class StationaryComponent implements OnInit {

  constructor(private _stdservice:CategoryServicesService , private router:Router) { }

  Booksform:any;
  FaceWashform:any;
  Shampooform:any;
  Soapform:any;
  ToothBrushform:any;
  ToothPasteform:any;

  

  ngOnInit(): void {
    this.Booksform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.FaceWashform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.Shampooform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.Soapform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.ToothBrushform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })
    this.ToothPasteform = new FormGroup({
      price : new FormControl(''),
      Qty : new  FormControl('')

    })

  }

  BooksSubmit(){
    localStorage.setItem("Books",JSON.stringify(this.Booksform.value));
  }
  FaceWashSubmit(){
    localStorage.setItem("FaceWash",JSON.stringify(this.FaceWashform.value));
  }
  ShampooSubmit(){
    localStorage.setItem("Shampoo",JSON.stringify(this. Shampooform.value));
  }
  SoapSubmit(){
    localStorage.setItem("Soap",JSON.stringify(this.Soapform.value));
  }
  ToothBrushSubmit(){
    localStorage.setItem("ToothBrush",JSON.stringify(this.ToothBrushform .value));
  }
  ToothPasteSubmit(){
    localStorage.setItem("ToothPaste",JSON.stringify(this.ToothPasteform .value));
  }

  BacktoHome(){
    this.router.navigate(['/Home'])
  }
}
