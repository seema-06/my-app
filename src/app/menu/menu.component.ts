import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { flyInout, expand } from '../animation/app-animations';
 import { baseURL } from '../shared/baseurl';
 import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

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
errMess: string;

constructor(private dishService: DishService,
  @Inject('BaseURL') private BaseURL) { }
  ngOnInit() {

    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
    errmess => this.errMess = <any>errmess);

  }
// onSelect(dish: Dish) {
//   this.selectedDish = dish;
// }
}
