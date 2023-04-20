import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LikeComponent } from './shared/components/like/like.component';
import { YoulikeComponent } from './shared/components/youlike/youlike.component';


@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    YoulikeComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
