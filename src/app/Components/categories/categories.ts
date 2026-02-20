import { Component, inject, OnInit, signal } from '@angular/core';
import { GetDataService } from '../../serviecs/getData/get-data.service';


@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit{

private dataService =  inject(GetDataService) ;
  categories = signal<any[]>([])
  ngOnInit(){
    // DO NOT use "new GetDataService()"
     this.dataService.getDataFromApi(`categories` , this.categories ) ;
  }
}
