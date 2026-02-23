import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cartService/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  cartService = inject(CartService);

  ngOnInit(): void {
    this.cartService.getUserCart().subscribe({
      error: (err) => console.error('Error fetching cart:', err)
    });
  }

  updateQuantity(productId: string, count: number): void {
    if (count <= 0) {
      this.removeItem(productId);
      return;
    }
    this.cartService.updateProductQuantity(productId, count).subscribe();
  }

  removeItem(productId: string): void {
    this.cartService.removeProductFromCart(productId).subscribe();
  }
}
