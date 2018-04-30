import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ShareComponent } from './share.component';


@NgModule({
  declarations: [
    ShareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ShareComponent]
})
export class ShareModule { }
