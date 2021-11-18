import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router , private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  vegitables(){
  this._router.navigate(['/Vegitables'])
  }
  Stationary(){
    this._router.navigate(['/Stationary'])
  }
  Fruits(){
    this._router.navigate(['/Fruits'])
  }

}
