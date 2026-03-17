import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";

export default function authInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('montagToken');
    const router = inject(Router);

    if (token) {
        const reqWithAuthentication = req.clone({
            headers: req.headers.set("token", token)
        });

        return next(reqWithAuthentication).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401) {
                    console.error('Token expired or invalid. Redirecting to login...');
                    localStorage.removeItem('montagToken');
                    router.navigate(['/login']);
                }
                
                return throwError(() => err); 
            })
        ); 
    } else {
        return next(req);
    }
}