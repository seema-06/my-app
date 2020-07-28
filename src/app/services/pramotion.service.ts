import { Injectable } from '@angular/core';
import { Pramotion } from '../shared/pramotion';
import { PRAMOTIONS } from '../shared/pramotions';


@Injectable({
  providedIn: 'root'
})
export class PramotionService {

  constructor() { }

  getPramotions(): Promise <Pramotion []> {
    return  Promise.resolve(PRAMOTIONS);
  }

  // specific dish
  getPramotion(id: string): Promise< Pramotion> {
return  Promise.resolve(PRAMOTIONS.filter((pramo) => ( pramo.id === id ))[0]);
  }

  // featured property which have been added that dish
  getFeaturedPramotion(): Promise<Pramotion> {
    return  Promise.resolve(PRAMOTIONS.filter((pramo) =>  pramo.featued )[0]);
  }
}


