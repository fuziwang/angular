import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-communitycontent',
  templateUrl: './communitycontent.component.html',
  styleUrls: ['./communitycontent.component.css']
})
export class CommunitycontentComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute) { }

  course;
  courseid: number;
  ngOnInit() {
    this.courseid = this.router.snapshot.params['id'];
    this.http.get('/api/community/' + this.courseid).subscribe((data) => {
      this.course = data;
    })
  }

}
