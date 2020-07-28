import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
feedbackform: FormGroup;
feedback: Feedback;
contactType = ContactType;

  constructor( private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
createForm() {
  this.feedbackform = this.fb.group({
    firstname: '' ,
    lastname: '',
    telnum: 0,
    email: '',
    agree: false,
    contacttype: 'none',
    message: ''
  }); }

  onSubmit() {
this.feedback = this.feedbackform.value;
console.log(this.feedback);
this.feedbackform.reset();
  }

}
