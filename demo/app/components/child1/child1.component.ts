import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }
  value:string;

  ngOnInit() {
  }
  @Output() appendValue = new EventEmitter();
  msg(e){
    if(e.keyCode == 13){
      this.append();
      this.value = "";
    }
  }
  append(){
      this.appendValue.emit(new Msg(this.value, false));
  }
}
export class Msg {
  constructor(public title: string, public done: boolean) { }
}
