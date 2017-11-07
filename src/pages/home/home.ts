import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AgeValidator } from "../../validators/age";
import { UsernameValidator } from "../../validators/username";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('signupSlider') signupSlider: any;

  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.slideOneForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      age: ['', AgeValidator.isValid]
    });

    this.slideTwoForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
      privacy: ['', Validators.required],
      bio: ['']
    });
  }

  next() {
    this.signupSlider.slideNext();
  }

  prev() {
    this.signupSlider.slidePrev();
  }

}
