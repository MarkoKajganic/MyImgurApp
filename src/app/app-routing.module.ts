import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { AlbumComponent } from './album/album.component';
import { FavoritesComponent } from './favorites/favorites.component';


const appRoutes: Routes = [
  {
      path: '',
      redirectTo: '/myAlbums',
      pathMatch: 'full'
  },
  {
    path: 'myAlbums',
    component: MyAlbumsComponent,
  },
  {
    path: 'album/:id',
    component: AlbumComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },

];

@NgModule({
  imports: [
      RouterModule.forRoot(
          appRoutes
      )
  ],
  exports: [
      RouterModule
  ]
})export class AppRoutingModule {}
