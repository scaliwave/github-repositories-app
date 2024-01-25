import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseUrl = 'http://localhost:3000/api/repositories';
  
  constructor(private http: HttpClient) { }

  getTopRepos(username:string):Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }
}
