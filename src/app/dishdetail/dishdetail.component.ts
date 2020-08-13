import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService} from '../services/dish.service';
import { flyInout, expand } from '../animation/app-animations';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],

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
export class DishdetailComponent implements OnInit {


  dish: Dish;
  // declare a decorative

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    // this.dish = this.dishService.getDish(id);

    this.dishService.getDish(id)
    .then((dish ) => this.dish = dish );
  }
goBack(): void {
  this.location.back();
}
}
