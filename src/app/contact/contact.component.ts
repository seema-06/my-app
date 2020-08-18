import { Component, OnInit , ViewChild } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { flyInout } from '../animation/app-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

  // for route animation
    // tslint:disable-next-line: use-host-property-decorator
    host: {
      '[@flyInout]': 'true',
      'style': 'display: block;'
    },
    animations: [
      flyInout()
    ]

})
export class ContactComponent implements OnInit {
feedbackform: FormGroup;
feedback: Feedback;
contactType = ContactType;
@ViewChild('fform') feedbackformDirective;
  constructor( private fb: FormBuilder) {
    this.createForm();
   }
   formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };
  ngOnInit() {
  }
  createForm(): void {
  this.feedbackform = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
    telnum: ['', [Validators.required, Validators.pattern] ],
    email: ['', [Validators.required, Validators.email] ],
    agree: false,
    contacttype: 'None',
    message: ''
  });
  this.feedbackform.valueChanges
  .subscribe(data => this.onValueChanged(data));

this.onValueChanged(); // (re)set validation messages now
}
onValueChanged(data?: any) {
  if (!this.feedbackform) { return; }
  const form = this.feedbackform;
  for (const field in this.formErrors) {
    if (this.formErrors.hasOwnProperty(field)) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }
}

  onSubmit() {
this.feedback = this.feedbackform.value;
console.log(this.feedback);
this.feedbackform.reset({
firstname: '',
lastname: '',
telnum: 0 ,
email: '',
agree: false,
contacttype: 'None',
message: ''
});
this.feedbackformDirective.resetForm();

}

}
