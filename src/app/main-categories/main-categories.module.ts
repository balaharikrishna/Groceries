import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegitablesComponent } from './vegitables/vegitables.component';
import { StationaryComponent } from './stationary/stationary.component';
import { FruitsComponent } from './fruits/fruits.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { AdminAccessGuard } from '../admin-access.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  {path :'', redirectTo:'items',pathMatch:'full'},
  {path :'items', component : ItemsComponent,
  canActivate:[AdminAccessGuard]},
  {path :'Vegitables', component : VegitablesComponent,
  canActivate:[AdminAccessGuard]},
  {path :'Stationary', component :StationaryComponent,
  canActivate:[AdminAccessGuard]},
  {path :'Fruits', component :FruitsComponent,
  canActivate:[AdminAccessGuard]},
]


@NgModule({
  declarations: [
    VegitablesComponent,
    StationaryComponent,
    FruitsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MainCategoriesModule { }

