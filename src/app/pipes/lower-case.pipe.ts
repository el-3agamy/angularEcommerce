import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : "lowerCasePipe" ,
  
})

export default class LowerCasePipe implements PipeTransform{
    transform(value : string ) : string{
        return value.toUpperCase() ;
    }
}

