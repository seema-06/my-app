import { Component, OnInit , Input, ViewChild, Inject} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Comment } from '../shared/comment';
import { DishService} from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { flyInout, expand } from '../animation/app-animations';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { visibility } from '../animation/app-animations';

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
      visibility(),

      expand()

    ]

})
export class DishdetailComponent implements OnInit {

  dishIds: string[];
  prev: string;
  next: string;
  dish: Dish;
  commentform: FormGroup;
  comment: Comment;
  errMess: string;

  // declare a decorative
  @ViewChild('cform') commentFormDirective;

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {

     }
     formatLabel(rating: number) {

      return rating;
    }


  ngOnInit() {

    this.createForm();

this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds,
  errmess => this.errMess = <any>errmess);

this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
.subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }
goBack(): void {
  this.location.back();
}
setPrevNext(dishId: string) {
  const index = this.dishIds.indexOf(dishId);
  this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
  this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
}
createForm() {

  // console.log("Date = " + date);
  this.commentform = this.fb.group({
    rating: [5, Validators.required],
    comment: ['' , Validators.required ],
    author: ['' , Validators.required, Validators.minLength(2) ],
    date: ['']

  }); }



onSubmit() {
  const date: Date = new Date();
  const n = date.toISOString();
  // console.log(this.dish);
  this.commentform.controls['date'].setValue(n);
 // this.comment = this.commentform.value;
  // console.log(this.comment);
  this.dish.Comments.push(this.commentform.value );
  // console.log(this.dish.Comments);
  this.commentform.reset({
    rating: '5'
  });
  this.commentFormDirective.resetForm();
}
}
