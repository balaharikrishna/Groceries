import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './admin-access.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FruitsComponent } from './main-categories/fruits/fruits.component';
import { StationaryComponent } from './main-categories/stationary/stationary.component';
import { VegitablesComponent } from './main-categories/vegitables/vegitables.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path :'', redirectTo:'/Login',pathMatch:'full'},
  {path :'Login', component : LoginComponent},
  
  {path :'Cart', component : CartComponent ,
  canActivate:[AdminAccessGuard]},
  {
    path: 'Home',
    component: HomeComponent,
    loadChildren: () => import('./main-categories/main-categories.module').then(m => m.MainCategoriesModule),
    
  },
  {path :'**', component : PagenotfoundComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myroutings = [
                               LoginComponent,
                               PagenotfoundComponent,
                               HomeComponent, 
                               CartComponent
                               
]
