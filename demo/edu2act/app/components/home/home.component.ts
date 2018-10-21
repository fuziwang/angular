import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flag1 = true;
  flag2 = false;
  flag3 = false;
  num = 1;
  constructor() { }

  ngOnInit() {
  }
  change(i) {
    this.flag1 = false;
    this.flag2 = false;
    this.flag3 = false;
    this['flag' + i] = true;
    this.num = i;
  }
}
