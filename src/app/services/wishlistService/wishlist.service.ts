import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private token = localStorage.getItem(`montagToken`) || '';
  http = inject(HttpClient);
  router = inject(Router);
  wishlistItems = signal<any[]>([]);

  private baseUrl = `https://ecommerce.routemisr.com/api/v1/wishlist`;

  loadUserWishlist(): Observable<any> {
    return this.http.get<any>(this.baseUrl, {
      headers: {
        token: localStorage.getItem('montagToken') || '',
      }
    }).pipe(
      tap((res) => {
        this.wishlistItems.set(res.data);
      })
    );
  }

  addItemToWishList(productId: string): Observable<any> {
    return this.http.post<any>(this.baseUrl, { productId }, {
      headers: {
        token: localStorage.getItem('montagToken') || '',
      }
    }).pipe(
      tap((res) => {
        // After adding, we might want to refresh the list or the API might return the updated list
        // For now, let's just log or reload
        this.loadUserWishlist().subscribe();
      })
    );
  }

  removeItemFromWishList(productId: string): Observable<any> {
    const url = `${this.baseUrl}/${productId}`;
    return this.http.delete<any>(url, {
      headers: {
        token: localStorage.getItem('montagToken') || '',
      }
    }).pipe(
      tap((res) => {
        // The API usually returns the updated list of IDs or data
        // Update the signal with the new data from response
        if (res.data) {
          // If the response contains the updated wishlist data, set it
          // Note: RouteMisr API often returns an array of IDs in 'data' for delete
          // So we might need to reload the full wishlist to get the objects
          this.loadUserWishlist().subscribe();
        }
      })
    );
  }
}
