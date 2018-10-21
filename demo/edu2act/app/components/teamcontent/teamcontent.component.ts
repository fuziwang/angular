import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teamcontent',
  templateUrl: './teamcontent.component.html',
  styleUrls: ['./teamcontent.component.css']
})
export class TeamcontentComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  course;
  courseid:number;
  ngOnInit() {
    this.courseid = this.router.snapshot.params['id'];
    this.http.get('/api/course/' + this.courseid).subscribe((data) => {
      this.course = data;
    })
  }

}
