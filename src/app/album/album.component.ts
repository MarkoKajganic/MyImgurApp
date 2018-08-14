import { Component, OnInit } from '@angular/core';
import { ImgurApiService } from '../imgur-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id;
  album;
  
  constructor(private route: ActivatedRoute,
              private imgurService: ImgurApiService) { }

  ngOnInit() {    
    this.id = this.route.params.subscribe(params => {
      let albumId = params['id'];
      this.imgurService.getAlbum(albumId).subscribe(data => {
        this.album = data;
      }, error => console.log('Could not load album' + albumId));
    });
  }

  favoriteImage(id) {
    console.log('YO LAJKOVO SI SLIKU SA ID: ', id);
    this.imgurService.favoriteImage(id);
  }

}
