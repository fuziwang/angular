import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private http: HttpClient) { }
  course;
  ngOnInit() {
    this.http.get('/api/course').subscribe((data) => {
      this.course = data;
    });
  }

}
