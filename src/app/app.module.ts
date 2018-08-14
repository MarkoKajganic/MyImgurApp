import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ImgurApiService } from './imgur-api.service';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';


@NgModule({
  declarations: [
    AppComponent,
    MyAlbumsComponent,
    AlbumComponent,
    AlbumsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
  ],

  providers: [
    ImgurApiService,
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
