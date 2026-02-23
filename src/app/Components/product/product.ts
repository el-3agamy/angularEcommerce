import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CartService } from '../../serviecs/cartService/cart.service';

@Component({
  selector: 'app-product',
  imports: [DatePipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit{


  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);

  productDetails = signal<any>(null);
  selectedImage = signal<string>('');
  isLoading = signal<boolean>(true);

  productId = signal<any>(0) ;

  cartService = inject(CartService) ;
  ngOnInit() {
   this.productId.set(this.route.snapshot.paramMap.get('productId')) ;
    const url = `https://ecommerce.routemisr.com/api/v1/products/${this.productId()}`;

    this.http.get<any>(url).subscribe({
      next: (res) => {
        this.productDetails.set(res.data);
        this.selectedImage.set(res.data.imageCover);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.log(err);
        this.isLoading.set(false);
      },
    });
  }

  selectImage(imageUrl: string) {
    this.selectedImage.set(imageUrl);
  }

  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  /////////////////////////////////////////////////



 
}
