import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  
  displayToast = signal<boolean>(false) ;
  
}
