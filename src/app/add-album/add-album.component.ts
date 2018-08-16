import { Component, OnInit } from '@angular/core';
import { ImgurApiService } from '../imgur-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  public album;

  constructor(private imgurService: ImgurApiService,
              private router: Router) { }

  ngOnInit() {
  }

  submit(title, imageUrl) {
    this.imgurService.addAlbum(title);
    this.router.navigateByUrl('/');
  }

}
