import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';


@Injectable()
export class ImgurApiService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

 
  getAlbumsIds(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', 'Client-ID a8f49cff5adf72a');
    return this.http.get(`${this.baseUrl}/3/account/MarkoKajganic/albums/ids`, {headers})
                    .map(response => response);
  }


}

