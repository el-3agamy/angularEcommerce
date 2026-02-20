import { Component, inject, OnInit, signal } from '@angular/core';
import { GetDataService } from '../../serviecs/getData/get-data.service';
import { Router } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [SlicePipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products  implements OnInit{
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
