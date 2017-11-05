import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('signupSlider') signupSlider: any;

  slideOneForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.slideOneForm = formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: ['']
    });
  }

  next() {
    this.signupSlider.slideNext();
  }

  prev() {
    this.signupSlider.slidePrev();
  }

}
