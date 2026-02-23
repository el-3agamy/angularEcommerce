import { Component, inject, OnInit, signal } from '@angular/core';
import { GetDataService } from '../../services/getData/get-data.service';
import { CartService } from '../../services/cartService/cart.service';


@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {

  private dataService = inject(GetDataService);
  categories = signal<any[]>([])
  ngOnInit() {
    // DO NOT use "new GetDataService()"
    this.dataService.getDataFromApi(`categories`, this.categories);
  }
}
