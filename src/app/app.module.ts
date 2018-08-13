import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ImgurApiService } from './imgur-api.service';


@NgModule({
  declarations: [
    AppComponent,
    MyAlbumsComponent,
    HttpModule,
    HttpClientModule,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ImgurApiService,
  ],

  providers: [

  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
