import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../serviecs/cartService/cart.service';
import { AuthService } from '../../serviecs/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
 
  authService = inject(AuthService) ;
  cartService = inject(CartService) ;
  router = inject(Router) ;
  navigateToCart(){
    this.router.navigateByUrl('cart')
  } ;

  navigateToSiginPage(){
    this.router.navigateByUrl('signin') ;
  } ;

  
  ngOnInit() {
    this.cartService.getUserCart().subscribe({
      next : (res)=>{
        this.cartService.productsCount.set(res.numOfCartItems)
      }
    })
  }
}


