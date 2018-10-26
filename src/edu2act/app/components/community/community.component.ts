import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  course;
  discuss;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('/api/community').subscribe((data) => {
      this.course = data;
    });
    this.http.get('/api/discuss').subscribe((data)=>{
      this.discuss = data;
    })
  }

}