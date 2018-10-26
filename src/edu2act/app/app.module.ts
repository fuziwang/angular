import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { CourseComponent } from './components/course/course.component';
import { CommunityComponent } from './components/community/community.component';
import { TeamcontentComponent } from './components/teamcontent/teamcontent.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursecontentComponent } from './components/coursecontent/coursecontent.component';
import { CommunitycontentComponent } from './components/communitycontent/communitycontent.component';
import { HometongbuComponent } from './components/hometongbu/hometongbu.component';
import { HomecourseComponent } from './components/homecourse/homecourse.component';
import { HomeqieshuoComponent } from './components/homeqieshuo/homeqieshuo.component';
import { HometongzhiComponent } from './components/hometongzhi/hometongzhi.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeamComponent,
    CourseComponent,
    CommunityComponent,
    TeamcontentComponent,
    FooterComponent,
    CoursecontentComponent,
    CommunitycontentComponent,
    HometongbuComponent,
    HomecourseComponent,
    HomeqieshuoComponent,
    HometongzhiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'team', component: TeamComponent },
      { path: 'team/:id', component: TeamcontentComponent },
      { path: 'course', component: CourseComponent },
      { path: 'course/:id', component: CoursecontentComponent },
      { path: 'community', component: CommunityComponent }, 
      { path: 'community/:id', component: CommunitycontentComponent },
      { path: 'home/team', component: HometongbuComponent },
      { path: 'home/course', component: HomecourseComponent },
      { path: 'home/notice', component: HometongzhiComponent },
      { path: 'home/commit', component: HomeqieshuoComponent },
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
