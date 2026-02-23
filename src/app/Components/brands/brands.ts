import { Component, inject, OnInit, signal } from '@angular/core';
import { GetDataService } from '../../services/getData/get-data.service';
import { CartService } from '../../services/cartService/cart.service';


@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
})
export class Brands implements OnInit {

  private dataServiec = inject(GetDataService);
  brands = signal<any[]>([]);

  ngOnInit() {
    this.dataServiec.getDataFromApi(`brands`, this.brands)
  }
}
