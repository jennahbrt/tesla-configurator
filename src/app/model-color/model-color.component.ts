import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BaseCar } from '../base-car';
import { Colors } from '../colors';
import { ModelColorService } from './model-color.service';

@Component({
  selector: 'app-model-color',
  standalone: true,
  imports: [FormsModule, MatSelectModule, UpperCasePipe, CommonModule],
  templateUrl: './model-color.component.html',
  styleUrl: './model-color.component.scss'
})
export class ModelColorComponent {
  constructor(private modelColorService: ModelColorService){}

  ngOnInit(){
    this.cars = this.modelColorService.getCars();
  }

  selected: BaseCar;
  color: Colors;
  cars: BaseCar[];



  getCar(i: number): BaseCar[] {
    let array:BaseCar[] = [];

    array = this.modelColorService.getCars();
    array.forEach(
      car => {car.code, car.description, car.colors}
    );
    return array;
  }
}
