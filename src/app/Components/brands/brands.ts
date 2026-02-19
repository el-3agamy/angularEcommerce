import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

interface BrandsResponse{
  data : any[]
}
@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
})
export class Brands {

  http = inject(HttpClient) ;
  brands = signal<any[]>([])
  
  ngOnInit(){

    const url = `https://ecommerce.routemisr.com/api/v1/brands` ;
    return this.http.get<BrandsResponse>(url).subscribe({
      next :(res)=>{
        console.log(res);
        this.brands.set(res.data) ;
        
      } ,
      error :(err)=>{
        console.log(`ERROR : ${err}`);
        
      }
    }) ;
  }
}
