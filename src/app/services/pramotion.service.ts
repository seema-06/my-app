import { Injectable } from '@angular/core';
import { Pramotion } from '../shared/pramotion';
import { PRAMOTIONS } from '../shared/pramotions';


@Injectable({
  providedIn: 'root'
})
export class PramotionService {

  constructor() { }

  getPramotions(): Promise <Pramotion []> {
     return new Promise (resolve => {
      //   server latency with 2 sec delay
      setTimeout(() => resolve(PRAMOTIONS), 2000);
    });
  //  return  Promise.resolve(PRAMOTIONS);
  }

  // specific dish
  getPramotion(id: string): Promise< Pramotion> {
    return new Promise (resolve => {
      //   server latency with 2 sec delay
      setTimeout(() => resolve(PRAMOTIONS.filter((pramo) => ( pramo.id === id ))[0]), 2000 );
    });
// return  Promise.resolve(PRAMOTIONS.filter((pramo) => ( pramo.id === id ))[0]);
  }

  // featured property which have been added that dish
  getFeaturedPramotion(): Promise<Pramotion> {
    return new Promise (resolve => {
      //   server latency with 2 sec delay
      setTimeout(() => resolve(PRAMOTIONS.filter((pramo) =>  pramo.featued )[0]), 2000 );
    });
  //  return  Promise.resolve(PRAMOTIONS.filter((pramo) =>  pramo.featued )[0]);
  }
}


