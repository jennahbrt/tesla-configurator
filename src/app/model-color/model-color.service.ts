import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseCar } from '../base-car';
@Injectable({
  providedIn: 'root'
})
export class ModelColorService {

  constructor(private http:HttpClient) { }

  fetchBaseCar():Observable<BaseCar[]>{
    return this.http.get<BaseCar[]>('/models')
  }
  getCars():BaseCar[]{
    let array:BaseCar[] = [];
    // this.fetchBaseCar()
    // .pipe(
    //   map(val => ({ ...val,
    //     array = val;
    //   })
    // )
    
    
    this.fetchBaseCar().subscribe((response)=>{
      response.forEach(element => {
        let c = new BaseCar();
        c.code = element.code;
        c.description = element.description;
        c.colors = element.colors;
        array.push(c);        
      })});

      
      //   for (let value in response){
        //     let c = new BaseCar();
        //     c = response[value]
        //     array.push(c);
        //   }
        // })
        // return array;
        return array;
  }
}
