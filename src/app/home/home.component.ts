import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Pramotion } from '../shared/pramotion';
import { PramotionService } from '../services/pramotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInout, expand } from '../animation/app-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

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

export class HomeComponent implements OnInit {
  dish: Dish;
  pramotion: Pramotion;
  leader: Leader;

  constructor(private dishService: DishService,
    private pramotionService: PramotionService,
    private leaderService: LeaderService) { }

  ngOnInit() {
    // this.dish = this.dishService.getFeaturedDish();
    this.dishService.getFeaturedDish()
    .then(dish => this.dish = dish );

   // this.pramotion = this.pramotionService.getFeaturedPramotion();
    this.pramotionService.getFeaturedPramotion()
    .then(pramotion => this.pramotion = pramotion );

    this.leaderService.getFeaturedLeader()
    .then( leader => this.leader = leader );


  }


}
