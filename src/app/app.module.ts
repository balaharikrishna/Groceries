import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, myroutings } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'

import { GroceryServiceService } from './grocery-service.service';
import { AdminAccessGuard } from './admin-access.guard';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    myroutings,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GroceryServiceService , AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
