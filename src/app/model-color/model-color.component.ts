import { Component } from '@angular/core';
import { BaseCar } from '../base-car';
import { Colors } from '../colors';
import { ModelColorService } from './model-color.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-model-color',
  standalone: true,
  imports: [NgFor],
  templateUrl: './model-color.component.html',
  styleUrl: './model-color.component.scss'
})
export class ModelColorComponent {
  constructor(private modelColorService: ModelColorService){}

  ngOnInit(){
    this.cars = this.modelColorService.getCars();
  }

  color: Colors = {name: '', details: '', price:0};
  cars: BaseCar[] = [];

  getCar(i: number): BaseCar {
    let array:BaseCar[] = [];
    array = this.modelColorService.getCars();
    return array[i]
  }
}
