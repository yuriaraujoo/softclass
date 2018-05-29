import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: Http) { }

  getCurrentTime(){
    return this. http.get('https://randomuser.me/api/')
    .map(res=> res.json()) ; 
  }
}
