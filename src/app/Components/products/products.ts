import { Component, computed, inject, OnInit, signal } from '@angular/core';
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

  //////////////////////////////////
  currentPage = signal<number>(1);
  pageSize = 12; 
  totalPages = signal<number>(1) ;

  pagesArray = computed(()=>Array.from({length : this.totalPages()} , (_ , i)=>i+1))
  ngOnInit() {
    this.dataService.getDataFromApi('products' , this.products  , this.currentPage() , this.pageSize);
    
  }

  loadProducts() {
    this.dataService.getDataFromApi('products',this.products ,this.currentPage(), this.pageSize)
      
    
   
  }

  
  changePage(page: number) {
    if (page >= 1 && page <=this.totalPages()) {
        this.currentPage.set(page) ;
        this.loadProducts() ;
        window.scrollTo({top : 0 , behavior : "smooth"})
    }; 
    
  }


  navigateToProductDetails(productId: string) {
    this.router.navigateByUrl(`products/${productId}`);
  }

  addToCart(productId: string) {
    this.cartService.addProductToCart(productId).subscribe();
  }
  
}
