import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  // specific dish
  getDish(id: string): Dish {
return DISHES.filter((dish) => ( dish.id === id ))[0];
  }

  // featured property which have been added that dish
  getFeaturedDish(): Dish {
    return DISHES.filter((dish) =>  dish.featued )[0];
  }
}
