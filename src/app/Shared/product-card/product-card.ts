// import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

    // http = inject(HttpClient) ;
    router = inject(Router) ;

    // ngOnInit(){
    //   const url = `` ;
    //   return this.http.get<any[]>(url) ;
    // } ;

    navigateToProductDetails(){
      this.router.navigateByUrl('/product') ;
    } ;

  }
