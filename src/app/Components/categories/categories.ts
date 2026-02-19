import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

interface CategoriesResponse{
  data : any[] ,
}
@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

  http = inject(HttpClient) ;
  categories = signal<any[]>([])
  ngOnInit(){
    const url = `https://ecommerce.routemisr.com/api/v1/categories` ;
    return this.http.get<CategoriesResponse>(url).subscribe({
      next : (res)=>{
        console.log(res);
        this.categories.set(res.data) ;
      } ,
      error :(err)=>{
        console.log(`ERROR : ${err}`);
        
      }
    })
  }
}
