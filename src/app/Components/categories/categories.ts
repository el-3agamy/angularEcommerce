import { Component, inject, signal } from '@angular/core';
import { GetDataService } from '../../serviecs/getData/get-data.service';


@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

private dataService =  inject(GetDataService) ;
  categories = signal<any[]>([])
  ngOnInit(){
    // DO NOT use "new GetDataService()"
     this.dataService.getDataFromApi(`categories` , this.categories ) ;
  }
}
