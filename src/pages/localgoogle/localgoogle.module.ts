import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalgooglePage } from './localgoogle';

@NgModule({
  declarations: [
    LocalgooglePage,
  ],
  imports: [
    IonicPageModule.forChild(LocalgooglePage),
  ],
})
export class LocalgooglePageModule {}
