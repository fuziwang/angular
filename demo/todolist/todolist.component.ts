import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  runningArr: Msg[] = [];
  value: string;
  count: number = 0;

  key(e) {
    if (e.keyCode == 13) {
      this.runningArr.unshift(new Msg(this.value, false));
      this.value = "";
      this.arrCount();
    }
  };
  //删除
  runningDel(ruid) {
    this.runningArr.splice(ruid, 1);
    this.arrCount();
  };
  //改变
  change(id) {
    this.runningArr[id].done = !this.runningArr[id].done;
    this.arrCount();
  }
  //计数
  arrCount() {
    this.count = 0;
    this.runningArr.forEach((value) => {
      if (value.done == false) {
        this.count++;
      }
    });
  }
  // doneDel(doid){
  //   this.doneArr.splice(doid,1);
  // }
  //清空
  clear() {
    this.runningArr = [];
  }
}

export class Msg {
  constructor(public title: string, public done: boolean) { }
}
