import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  router =new Router()
  navigateToHomePage(){
    this.router.navigateByUrl(``)
  } ;
  navigateToBrandsPage(){
    this.router.navigateByUrl(`brands`)
  } ;
  navigateToCategoriesPage(){
    this.router.navigateByUrl(`categories`)
  } ;
 
}
