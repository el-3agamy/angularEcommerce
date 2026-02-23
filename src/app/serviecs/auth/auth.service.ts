import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = signal(localStorage.getItem('montagToken') || null)  ;
  router = inject(Router) ;

  logOutFn(){
    localStorage.removeItem('montagToken') ;
    this.token.set(null) ;
    this.router.navigateByUrl('signin')
  }
}
