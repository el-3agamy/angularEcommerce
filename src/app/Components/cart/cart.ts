import { Component, inject, OnInit, signal } from '@angular/core';
import { CartService } from '../../serviecs/cartService/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  
})
export class Cart implements OnInit {

    // productsCount : number = 0 ;
    productsCount = inject(CartService) ;
    caetItems = signal<any>([])

     ngOnInit(): void {
        this.caetItems.set(this.productsCount.getUserCart());
     }
}
