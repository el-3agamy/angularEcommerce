import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

interface IProductDetails{
  data : any[] ;
}
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  private http = inject(HttpClient) ;
  private productId = inject(Router) ;
  public productDetails = signal<any[]>([]) ;

  ngOnInit(productId = this.productId.url){
    console.log(productId); 
    const url = `https://ecommerce.routemisr.com/api/v1${productId}` ;
    return this.http.get<IProductDetails>(url).subscribe({
      next:(res)=>{
        this.productDetails.set(res.data) ;
    
      } ,

      error :(err)=>{
        console.log(err);
        
      }
    })
  }
}
