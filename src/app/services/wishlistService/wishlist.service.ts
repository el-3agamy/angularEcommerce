import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {

  private http = inject(HttpClient);
router = inject(Router) ;
  wishlistItems = signal<any[]>([]);
  loading = signal(false);

  private baseUrl = `https://ecommerce.routemisr.com/api/v1/wishlist`;

  private get headers() {
    return {
      token: localStorage.getItem('montagToken') || '',
    };
  }

  // ✅ Load Wishlist
  loadUserWishlist(): void {
    this.loading.set(true);

    this.http.get<any>(this.baseUrl, {
      headers: this.headers,
    }).subscribe({
      next: (res) => {
        this.wishlistItems.set(res.data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  // ✅ Add Item
  addItemToWishList(): void {
    this.http.post<any>(this.baseUrl, {productId : this.router.url.split('/')[2] }, {
      headers: this.headers,
    }).subscribe({
      next: () => {
        this.loadUserWishlist(); // refresh automatically
      }
    });
  }

  // ✅ Remove Item
  removeItemFromWishList(productId: string): void {
    const url = `${this.baseUrl}/${productId}`;

    this.http.delete<any>(url, {
      headers: this.headers,
    }).subscribe({
      next: () => {
        this.wishlistItems.update(items =>
          items.filter(item => item._id !== productId)
        );
      }
    });
  }
}