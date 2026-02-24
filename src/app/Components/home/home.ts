import { Component, inject, OnInit, signal } from '@angular/core';
import { GetDataService } from '../../services/getData/get-data.service';
import { Router, RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { CartService } from '../../services/cartService/cart.service';
import { Toast } from "../../Shared/toast/toast";

@Component({
  selector: 'app-home',
  imports: [RouterLink, SlicePipe, Toast],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
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
