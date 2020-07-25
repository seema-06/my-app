import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Pramotion } from '../shared/pramotion';
import { PramotionService } from '../services/pramotion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  pramotion: Pramotion;
  constructor(private dishService: DishService,
    private pramotionService: PramotionService) { }

  ngOnInit() {
    this.dish = this.dishService.getFeaturedDish();
    this.pramotion = this.pramotionService.getFeaturedPramotion();
  }


}
