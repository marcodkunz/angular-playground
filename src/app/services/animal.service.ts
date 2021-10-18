import {Injectable} from '@angular/core';
import {Animal, AnimalType} from "../models/Animal";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animals: Array<Animal> = [];

  constructor() {
    this.animals.push({type: AnimalType.BIRD, name: "Falcon"});
    this.animals.push({type: AnimalType.BIRD, name: "Eagle"});
    this.animals.push({type: AnimalType.BIRD, name: "Penguin"});
    this.animals.push({type: AnimalType.REPTILE, name: "Crocodile"});
    this.animals.push({type: AnimalType.REPTILE, name: "Lizard"});
    this.animals.push({type: AnimalType.REPTILE, name: "Snake"});
    this.animals.push({type: AnimalType.MAMMAL, name: "Lion"});
    this.animals.push({type: AnimalType.MAMMAL, name: "Mouse"});
    this.animals.push({type: AnimalType.MAMMAL, name: "Cat"});
  }

  getAnimals(): Array<Animal> {
    return this.animals;
  }

}
