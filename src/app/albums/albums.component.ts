import { Component, OnInit, Input } from '@angular/core';
import { ImgurApiService } from '../imgur-api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @Input() albumId: string;
  album: object;

  constructor(private imgurService: ImgurApiService) { }

  ngOnInit() {
    this.imgurService.getAlbum(this.albumId).subscribe
    (data => {this.album = data});
  }

}
