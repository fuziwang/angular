import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController,public http:HttpClient) {
    
  }

}
