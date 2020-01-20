import { SearchModule } from './../search/search.module';
import { HomeRoutingModule } from './home-routing.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SearchModule
  ],
  declarations: [
    HomeComponent,
  ],
})

export class HomeModule {}
