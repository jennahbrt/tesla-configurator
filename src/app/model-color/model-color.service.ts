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
    // .pipe(
      // map((value)=>
      //   Object.entries(value).map(([id, detail, colors])=> ({
      //     id,
      //     detail,
      //     colors,
      //   })))
    // )
  }
  getCars():BaseCar[]{
    let array:BaseCar[] = [];
    this.fetchBaseCar().subscribe((response)=>{
      for (let value in response){
        let c = new BaseCar();
        c = response[value]
        array.push(c);
      }
    })
    return array;
  }
}
