import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThinkPage } from './think';

@NgModule({
  declarations: [
    ThinkPage,
  ],
  imports: [
    IonicPageModule.forChild(ThinkPage),
  ],
})
export class ThinkPageModule {}
