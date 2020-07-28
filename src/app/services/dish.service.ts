import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  // specific dish
  getDish(id: string): Promise<Dish> {
return Promise.resolve(DISHES.filter((dish) => ( dish.id === id ))[0]);
  }

  // featured property which have been added that dish
  getFeaturedDish(): Promise<Dish > {
    return Promise.resolve(DISHES.filter((dish) =>  dish.featued )[0]);
  }
}
