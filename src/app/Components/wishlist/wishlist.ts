import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlistService/wishlist.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cartService/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist implements OnInit {
  http = inject(HttpClient);
  wishlistService = inject(WishlistService);
  cartService = inject(CartService);

  ngOnInit() {
    this.wishlistService.loadUserWishlist();
  }

  addToCart(productId: string) {
    this.cartService.addProductToCart(productId).subscribe();
  }

  removeFromWishlist(productId: string) {
    this.wishlistService.removeItemFromWishList(productId);
  }
}