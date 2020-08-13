import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { flyInout, expand } from '../animation/app-animations';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

// for route animation
  // tslint:disable-next-line: use-host-property-decorator
  host: {
    '[@flyInout]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInout(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

dishes: Dish[] ;
selectedDish: Dish;
// selectedDish: Dish = DISHES[0];
  constructor( private dishService: DishService ) { }

  ngOnInit() {
     this.dishService.getDishes()
    .then((dishes) => this.dishes = dishes );
  }
onSelect(dish: Dish) {
  this.selectedDish = dish;
}
}
