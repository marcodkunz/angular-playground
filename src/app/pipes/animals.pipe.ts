import {Pipe, PipeTransform} from '@angular/core';
import {Animal, AnimalType} from "../models/Animal";

@Pipe({
  name: 'animals'
})
export class AnimalsPipe implements PipeTransform {

  transform(value: Array<Animal>, filter?: AnimalType): Array<Animal> {
    if (filter == null) return value;
    return value.filter(animal => animal.type == filter);
  }

}
