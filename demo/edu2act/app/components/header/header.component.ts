import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag1 = false;
  flag2 = false;
  constructor() { }

  ngOnInit() {
  }
  change(i){
    this.flag1 = false;
    this.flag2 = false;
    this['flag' + i] = true;
  }
  del(){
    this.flag1 = false;
    this.flag2 = false;
  }
}
