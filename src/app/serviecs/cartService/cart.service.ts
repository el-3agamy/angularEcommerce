// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { inject, Injectable, signal } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {

//   private route = inject(ActivatedRoute);
//   // token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmJlOWExN2Q5Y2Q2OTdmZmQ1MWE4YyIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcxNzg0MTY0LCJleHAiOjE3Nzk1NjAxNjR9.6QUABkJfor5Mj939ODnDwQU6DwBfW7NQkjZUceI-vI4`
//     token = localStorage.getItem(`montagToken`) ;
//   productsCount = signal <number>(0) ;
//   // productsCount : number = 0 ;
//   http = inject(HttpClient) ;
//   router = inject(Router) ;
//   // addProductToCart() {
//   //   console.log(`add product to cart`);
//   //   const url = `https://ecommerce.routemisr.com/api/v1/cart` ;
//   //   const productId = this.router.url.trim().split('/')[2] ;
//   //   console.log(productId);
    
//   //   this.http.post<any>(url , productId  , {
//   //     headers :{
//   //         token : this.token ,
//   //     }
//   //   })
//   //   // this.productsCount.set(this.productsCount++)
//   //   this.productsCount.update(count=>count+1)
//   //   console.log(this.productsCount());
    
//   // } ;

  
//   addProductToCart(){
//     // const productId = this.route.snapshot.paramMap.get(`productId`) as string ;
//     const productId = this.router.url.trim().split('/')[2] ;
//     console.log(productId);
    
//     const url = `https://ecommerce.routemisr.com/api/v1/cart` ;
//     // const body = new HttpHeaders({
//     //       productId ,

//     // }) ;
//     // console.log(body);
    

//     this.http.post<any>(url , {
//       productId
//     } , {
//       headers : {
//         token : this.token as string  ,
//       }
//     }).subscribe({
//       next : (val)=>{
//         console.log(val);
//         this.productsCount.update(count=>count+1) ;
//         console.log(this.productsCount());
        
        
//       } ,
//       error : (err)=>{
//         console.log(err);
        
//       }
//     })
//   }

//   ////////////////////////////////////////////////////////////

//   removeProductFromCart(productId : string){
//     const params = new HttpParams() ;
//     console.log(params);
//     const url = `https://ecommerce.routemisr.com/api/v1/cart/${productId}` ;
//     this.http.delete<any>(url , {
//       headers :{
//         // token : localStorage.getItem('')
//           token : this.token as string,

//       }
//     }).subscribe({
//       next :(val)=>{
//         console.log(val);

        
//       } ,
//       error :(err)=>{
//           console.log(err);
          
//       }
//     })
//   } ;

//   /////////////////////////////////////////////


//   getUserProductsCart(){
//     const url = `https://ecommerce.routemisr.com/api/v1/cart` ;
//     this.http.get<any>(url , {
//       headers :{
//         token : this.token as string ,
//       }
//     }).subscribe({
//       next : (res)=>{
//         console.log(res);
//         return res ;
        
//       }
//     })
//   }
// }

/////////////////////////////////////////////////////////

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private http = inject(HttpClient);
  private router = inject(Router);

  // Use a signal to track the UI count
  productsCount = signal<number>(0);
  
  // Base API URL to avoid repetition
  private baseUrl = `https://ecommerce.routemisr.com/api/v1/cart`;

  // Get token helper
  private get token(): string {
    return localStorage.getItem('montagToken') || '';
  }

  // Add Product
  addProductToCart(productId: string) {
    // Note: Passing { productId } as an object
    return this.http.post<any>(this.baseUrl, { productId }, {
      headers: { token: this.token }
    }).subscribe({
      next: (res) => {
        this.productsCount.set(res.numOfCartItems); // Sync with actual API count
        console.log('Added to cart:', res);
      },
      error: (err) => console.error(err)
    });
  }

  // Remove Product
  removeProductFromCart(productId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${productId}`, {
      headers: { token: this.token }
    });
  }

  // Get User Cart (Returns Observable so component can display data)
  getUserCart(): Observable<any> {
    return this.http.get(this.baseUrl, {
      headers: { token: this.token }
    });
  }
}