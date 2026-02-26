import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cartService/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { Wishlist } from '../../Components/wishlist/wishlist';
import { WishlistService } from '../../services/wishlistService/wishlist.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  authService = inject(AuthService);
  cartService = inject(CartService);
  wishlistService = inject(WishlistService) ;
  router = inject(Router);
  

  navigateToWishlist(){
    this.router.navigateByUrl('wishlist') ;
  };
  navigateToCart() {
    this.router.navigateByUrl('cart')
  };

  navigateToSiginPage() {
    this.router.navigateByUrl('signin');
  };


  ngOnInit() {
    if (this.authService.token()) {
      this.cartService.getUserCart().subscribe();
      this.wishlistService.loadUserWishlist()
    }
  }
}


