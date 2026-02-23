import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cartService/cart.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  authService = inject(AuthService);
  cartService = inject(CartService);
  router = inject(Router);
  navigateToCart() {
    this.router.navigateByUrl('cart')
  };

  navigateToSiginPage() {
    this.router.navigateByUrl('signin');
  };


  ngOnInit() {
    if (this.authService.token()) {
      this.cartService.getUserCart().subscribe();
    }
  }
}


