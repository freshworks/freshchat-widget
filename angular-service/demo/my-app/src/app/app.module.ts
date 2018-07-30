import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//IMPORT Freschat Service from Freshchat Module
import { FreshchatModule } from 'angular-freshchat-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //IMPORT the module and its dependencies
    FreshchatModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
