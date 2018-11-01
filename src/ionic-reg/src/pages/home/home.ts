import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { APage } from '../a/a';
import { RegPage } from '../reg/reg';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goSub(){
    this.navCtrl.push(APage,{id:1});
  }
  goReg(){
    this.navCtrl.push(RegPage);
  }
}
