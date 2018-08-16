import { Component, OnInit } from '@angular/core';
import { ImgurApiService } from '../imgur-api.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  public album;

  constructor(private imgurService: ImgurApiService) { }

  ngOnInit() {
  }

  submit(title) {
    console.log('radi submit funkcija');
    console.log(title);
    this.imgurService.addAlbum(title);
  }

}
