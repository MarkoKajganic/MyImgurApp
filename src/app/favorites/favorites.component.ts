import { Component, OnInit } from '@angular/core';
import { ImgurApiService } from '../imgur-api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private imgurService: ImgurApiService) { }
  favoriteImages;

  ngOnInit() {
    this.imgurService.getFavoriteImages().subscribe
      (data => {this.favoriteImages = data});
  }
  

}
