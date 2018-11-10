import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  flag1 = true;
  flag2 = false;
  num = 1;
  constructor(public navCtrl: NavController) {

  }

  change(i){
    this.num = i;
    this.flag1 = false;
    this.flag2 = false;
    this['flag' + i] = true;
  }
}
