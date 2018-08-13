import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAlbumsComponent } from './my-albums/my-albums.component';


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
