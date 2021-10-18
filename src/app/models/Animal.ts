export enum AnimalType {BIRD, REPTILE, MAMMAL}

export interface Animal {
  type: AnimalType;
  name: string;
}
