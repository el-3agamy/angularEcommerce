import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = signal(localStorage.getItem('montagToken') || null)  ;
  router = inject(Router) ;
  
  isLoggedin(){
    const token = localStorage.getItem("montagToken") ;
  return !!token ;
  }
  logOutFn(){
    localStorage.removeItem('montagToken') ;
    this.token.set(null) ;
    this.router.navigateByUrl('signin')
  }
}
