import {Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  form : FormGroup;
  constructor(private fb: FormBuilder){
    this.createForm();
  }
  createForm(){
    this.form = this.fb.group({
      food: [{value: '', disabled: false}, [Validators.required]],
      cars: [{value: '', disabled: false}, [Validators.required]],

    });
  }

  onSubmit(){
    // get the values of the form that has been enterd by the user
    console.log(this.form.value);
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */