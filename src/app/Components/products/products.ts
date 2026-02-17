import { Component } from '@angular/core';
import { ProductCard } from "../../Shared/product-card/product-card";

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
 products = [] ;
}
