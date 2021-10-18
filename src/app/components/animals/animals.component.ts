import {Component} from '@angular/core';
import {Animal, AnimalType} from "../../models/Animal";
import {AnimalService} from "../../services/animal.service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {

  animals: Array<Animal> = [];

  selected: number = 0;

  constructor(private animalService: AnimalService) {
    this.animals = animalService.getAnimals();
  }

  setFilter(filter: number) :void {
    this.selected = filter;
  }
}
