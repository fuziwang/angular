import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coursecontent',
  templateUrl: './coursecontent.component.html',
  styleUrls: ['./coursecontent.component.css']
})
export class CoursecontentComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute) { }

  course;
  courseid: number;
  ngOnInit() {
    this.courseid = this.router.snapshot.params['id'];
    this.http.get('/api/study/' + this.courseid).subscribe((data) => {
      this.course = data;
    })
  }

}
