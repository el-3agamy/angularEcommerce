import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export function testInterceptor (req : HttpRequest<any> , next : HttpHandlerFn) {
    console.log(req);
    return next(req).pipe(
        tap((event=>{
            if(event.type === HttpEventType.Response){
                console.log(req.url , event.status);
                
            }
        }))
    ) ;
    
}