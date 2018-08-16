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
        alert('album added');
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
        alert('image added');
      }, error => {
          console.log(error);
    });

  }

  deleteAlbum(id) {
    console.log('logujem iz deleteAlbum funkcije u servisu!! ID:', id);
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.delete(`${this.baseUrl}/3/album/${id}`, {headers})
    .subscribe(data => {
      alert('ok');
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
      alert('image added to favorites');
    }, error => {
        console.log(error);
    });
  }

  //COMMENTS
  getComments(id) : Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.get(`${this.baseUrl}/3/gallery/${id}/comments`, {headers});
  }

  deleteComment(id) {
    console.log('logujem iz deleteComment funkcije u servisu!! ID komentara je:', id)
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.delete(`${this.baseUrl}/3/comment/${id}`, {headers})
    .subscribe(data => {
      alert('comment deleted');
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
        alert('comment added');
      }, error => {
          console.log(error);
    });
  }


}

