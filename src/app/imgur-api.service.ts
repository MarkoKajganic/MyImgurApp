import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable()
export class ImgurApiService {

  constructor(private http: HttpClient) { }

}
