import { Component, inject, signal } from '@angular/core';
import { ProductCard } from "../../Shared/product-card/product-card";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home{

  http = inject(HttpClient) ;
  products  = signal<any[]>([]) ;
  

  ngOnInit(){

    const url = `https://ecommerce.routemisr.com/api/v1/products` ;
     this.http.get<any[]>(url).subscribe({
      next:(val)=>{
        console.log(val); 
        console.log(Object.entries(val)); 
        console.log(Object.values(val)[2]); 
         this.products.set(Object.values(val)[2]) 
         return this.products ;
      },
      error : (err)=>console.log("HTTP ERROR : " , err)
       
     }) ;

  }
}
