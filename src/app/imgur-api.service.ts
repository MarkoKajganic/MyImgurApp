import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs/Observable';

@Injectable()
export class ImgurApiService {

  constructor(private http: HttpClient) { }

  // getAlbumsIds() Observable<any> {
  //   return this.http.get
  // }

}
