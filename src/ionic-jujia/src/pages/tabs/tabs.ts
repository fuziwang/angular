import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {ContactPage} from '../contact/contact';
import {ThinkPage} from '../think/think';
import {StorePage} from '../store/store';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StorePage;
  tab3Root = ContactPage;
  tab4Root = ThinkPage;
  tab5Root = AboutPage;
  constructor() {

  }
}
