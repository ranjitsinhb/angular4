import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }
