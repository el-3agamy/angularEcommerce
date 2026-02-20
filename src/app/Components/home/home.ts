import { Component, inject, signal } from '@angular/core';
import { GetDataService } from '../../serviecs/getData/get-data.service';
import { Router, RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SlicePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);
  private dataService = inject(GetDataService);
  products = signal<any[]>([]);

  ngOnInit() {
    this.dataService.getDataFromApi('products', this.products);
  }

  navigateToProductDetails(productId: string) {
    this.router.navigateByUrl(`products/${productId}`);
  }
}
