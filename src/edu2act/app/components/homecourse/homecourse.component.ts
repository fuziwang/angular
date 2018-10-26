import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homecourse',
  templateUrl: './homecourse.component.html',
  styleUrls: ['./homecourse.component.css']
})
export class HomecourseComponent implements OnInit {

  course;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/study').subscribe((data) => {
      this.course = data;
    });
  }

}
