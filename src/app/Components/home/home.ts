import { Component, inject, signal } from '@angular/core';
import { ProductCard } from "../../Shared/product-card/product-card";
import { GetDataService } from '../../serviecs/getData/get-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home{

  private router = inject(Router)
  private dataService = inject(GetDataService) ;
  products  = signal<any[]>([]) ;



  ngOnInit(){
    this.dataService.getDataFromApi(`products` , this.products)
  } ;

  navigateToProductDetails(productId : string){
    this.router.navigateByUrl(`products/${productId}`)
  }
}
