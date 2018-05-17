import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class PostsService {
  urlBase = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  getPosts(max?:number){
    let url = "posts";
    if(max !== undefined) {
       url += "?max=" + max
    }
    return this.http.get(this.urlBase + url );
  }

}
