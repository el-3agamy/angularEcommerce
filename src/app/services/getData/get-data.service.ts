import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

interface ApiResponse {
  data: any[],
}
@Injectable({
  providedIn: 'root',

})
export class GetDataService {

  private http = inject(HttpClient);
  getDataFromApi(endPoint: string, data: any , page : number = 1 , limit : number = 12) {
    const url = `https://ecommerce.routemisr.com/api/v1/${endPoint}?page=${page}&limit=${limit}`;
    return this.http.get<ApiResponse>(url).subscribe({

      next: (res) => {
        console.log(res);
        
        data.set(res.data);
      },
      error: (err) => {
        console.log(`ERROR : ${err}`);

      }
    })
  }
}
