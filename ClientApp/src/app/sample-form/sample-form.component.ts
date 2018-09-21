import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent {

  constructor(private dataForm: FormBuilder) { }

  stateList = ["AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"];

  userData = this.dataForm.group({
    firstName: [''],
    lastName: [''],
    address: this.dataForm.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });


  onSubmit() {
    console.warn(this.userData.value);
  }

}
