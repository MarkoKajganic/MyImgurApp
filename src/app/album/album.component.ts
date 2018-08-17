import { Component, OnInit } from '@angular/core';
import { ImgurApiService } from '../imgur-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id;
  album: object;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
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
    this.imgurService.favoriteImage(id);
  }

  deleteAlbum(id) {
    this.imgurService.deleteAlbum(id);
    this.router.navigateByUrl('/');
  }

  addImage(imageUrl) {
    this.id = this.route.params.subscribe(params => {
      let albumId = params['id'];
      this.imgurService.addImageToAlbum(albumId, imageUrl);
    });
  }

  submitComment(id, comment) {
    this.imgurService.createComment(id, comment);
  }

}
