import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImgurApiService } from '../imgur-api.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  id;
  comments: object;

  constructor(private route: ActivatedRoute,
              private imgurService: ImgurApiService) { }

  ngOnInit() {
    this.id = this.route.params.subscribe(params => {
      let albumId = params['id'];
      this.imgurService.getComments(albumId).subscribe(data => {
        this.comments = data;
      }, error => console.log('Could not load comments from album with id:' + albumId));
    });
  }

  deleteComment(id) {
    this.imgurService.deleteComment(id);
  }

  vote(id, vote) {
    this.imgurService.vote(id, vote);
  }

}
