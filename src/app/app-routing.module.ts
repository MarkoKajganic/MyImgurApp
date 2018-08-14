import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { AlbumComponent } from './album/album.component';


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
  }

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
