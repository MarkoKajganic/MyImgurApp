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

 
  getAlbumsIds(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.clientId);
    return this.http.get(`${this.baseUrl}/3/account/MarkoKajganic/albums/ids`, {headers})
                    .map(response => response);
  }

  getAlbum(id): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.get(`${this.baseUrl}/3/account/MarkoKajganic/album/${id}`, {headers});
  }

  favoriteImage(id): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.post(`${this.baseUrl}/3/image/${id}/favorite`, {headers});
  }

  getFavoriteImages(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.accessToken);
    return this.http.get(`${this.baseUrl}/3/account/MarkoKajganic/favorites`, {headers})
  }

}

