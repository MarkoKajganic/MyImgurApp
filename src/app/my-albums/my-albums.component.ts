import { Component, OnInit } from '@angular/core';
import { ImgurApiService } from '../imgur-api.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.css']
})
export class MyAlbumsComponent implements OnInit {

  albumIds: object;

  constructor(private imgurService: ImgurApiService) { }

  ngOnInit() {
    this.imgurService.getAlbumsIds()
      .subscribe(data => {this.albumIds = data});
  }

}
