import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class ImgurApiService {
  baseUrl = environment.baseUrl;
  clientId = environment.clientId;
  accessToken = environment.acessToken;

  constructor(private http: HttpClient) { }

 //CRUD ALBUMS
  getAlbumsIds(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.clientId);
    return this.http.get(`${this.baseUrl}/3/account/MarkoKajganic/albums/ids`, {headers})
                    .map(response => response);
  }

  getAlbum(id): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.get(`${this.baseUrl}/3/account/MarkoKajganic/album/${id}`, {headers});
  }

  addAlbum(album){
    let body = `title=${album}`;
    return this.http.post(`${this.baseUrl}/3/album`, body, {
      headers: new HttpHeaders({
        'Authorization': this.accessToken,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }).subscribe(data => {
        alert('Album added');
      }, error => {
          console.log(error);
    });
  }

  addImageToAlbum(albumId ,imageUrl) {
    let body = `image=${imageUrl}&album=${albumId}`;
    return this.http.post(`${this.baseUrl}/3/image`, body, {
      headers: new HttpHeaders({
        'Authorization': this.accessToken,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }).subscribe(data => {
        alert('Image added');
      }, error => {
          console.log(error);
    });
  }

  deleteAlbum(id) {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.delete(`${this.baseUrl}/3/album/${id}`, {headers})
    .subscribe(data => {
      alert('Album deleted');
    }, error => {
        console.log(error);
  });
  }

  //FAVORITES
  getFavoriteImages() {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.get(`${this.baseUrl}/3/account/MarkoKajganic/favorites`, {headers});
  }

  favoriteImage(id) {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.post(`${this.baseUrl}/3/image/${id}/favorite`, {headers})
    .subscribe(data => {
      alert('Image added to favorites');
    }, error => {
        console.log(error);
    });
  }

  //COMMENTS
  getComments(id): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.get(`${this.baseUrl}/3/gallery/${id}/comments`, {headers});
  }

  deleteComment(id) {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.delete(`${this.baseUrl}/3/comment/${id}`, {headers})
    .subscribe(data => {
      alert('Comment deleted');
    }, error => {
        console.log(error);
    });
  }

  createComment(id, commentBody) {
    let body = `image_id=${id}&comment=${commentBody}`;
    return this.http.post(`${this.baseUrl}/3/comment`, body, {
      headers: new HttpHeaders({
        'Authorization': this.accessToken,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }).subscribe(data => {
        alert('Comment added');
      }, error => {
          console.log(error);
    });
  }

  vote(id, vote) {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.post(`${this.baseUrl}/3/comment/${id}/vote/${vote}`, {headers})
    .subscribe(data => {
      alert(`you voted ${vote}!`);
    }, error => {
        console.log(error);
    });
  }
  

}

