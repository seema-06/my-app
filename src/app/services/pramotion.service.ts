import { Injectable } from '@angular/core';
import { Pramotion } from '../shared/pramotion';
import { PRAMOTIONS } from '../shared/pramotions';


@Injectable({
  providedIn: 'root'
})
export class PramotionService {

  constructor() { }

  getPramotions(): Pramotion [] {
    return PRAMOTIONS;
  }

  // specific dish
  getPramotion(id: string): Pramotion {
return PRAMOTIONS.filter((pramo) => ( pramo.id === id ))[0];
  }

  // featured property which have been added that dish
  getFeaturedPramotion(): Pramotion {
    return PRAMOTIONS.filter((pramo) =>  pramo.featued )[0];
  }
}


