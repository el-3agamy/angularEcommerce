import { Component, inject, OnInit, signal } from '@angular/core';
import { GetDataService } from '../../services/getData/get-data.service';
import { Router } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { CartService } from '../../services/cartService/cart.service';

@Component({
  selector: 'app-products',
  imports: [SlicePipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private router = inject(Router);
  private dataService = inject(GetDataService);
  private cartService = inject(CartService);
  products = signal<any[]>([]);

  ngOnInit() {
    this.dataService.getDataFromApi('products', this.products);
  }

  navigateToProductDetails(productId: string) {
    this.router.navigateByUrl(`products/${productId}`);
  }

  addToCart(productId: string) {
    this.cartService.addProductToCart(productId).subscribe();
  }
}
