import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [DatePipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);

  productDetails = signal<any>(null);
  selectedImage = signal<string>('');
  isLoading = signal<boolean>(true);

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('productId');
    const url = `https://ecommerce.routemisr.com/api/v1/products/${productId}`;

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
}
