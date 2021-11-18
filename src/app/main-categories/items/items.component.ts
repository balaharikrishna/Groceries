import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private _router:Router , private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  vegitables(){
  this._router.navigate(['/Home/Vegitables'])
  }
  Stationary(){
    this._router.navigate(['/Home/Stationary'])
  }
  Fruits(){
    this._router.navigate(['/Home/Fruits'])
  }

  

}
