import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {PersonPage} from '../person/person'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PersonPage;
  tab5Root = 'APage';//对于页面有很多静态资源的情况下（比如网商购物页面），为了节省用户流量和提高页面性能，可以在用户浏览到当前资源的时候，再对资源进行请求和加载。
  constructor() {

  }
}
