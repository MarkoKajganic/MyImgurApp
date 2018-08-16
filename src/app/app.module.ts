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
import { FavoritesComponent } from './favorites/favorites.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { FormsModule }   from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    MyAlbumsComponent,
    AlbumComponent,
    AlbumsComponent,
    FavoritesComponent,
    AddAlbumComponent,
    CommentsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    
  ],

  providers: [
    ImgurApiService,
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
