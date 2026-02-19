import { Component, inject, signal } from '@angular/core';
import { GetDataService } from '../../serviecs/getData/get-data.service';


@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
})
export class Brands {

  private dataServiec = inject(GetDataService) ;
  brands = signal<any[]>([]) ;
  
  ngOnInit(){
    this.dataServiec.getDataFromApi(`brands` , this.brands)
  }
}
