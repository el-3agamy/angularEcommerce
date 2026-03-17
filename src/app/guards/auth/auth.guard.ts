import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route : ActivatedRouteSnapshot , state : RouterStateSnapshot) => {
  
const authService = inject(AuthService) ;
const router = inject (Router) ;
console.log(route , state);

if(authService.isLoggedin()){
  return true ;
} else{ 
  return router.createUrlTree(['home']) ;
}

};
