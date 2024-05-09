import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }
  getRepo(username: string, page: number, per_page: number) {
    let url = `https://api.github.com/search/repositories?q=user:${username} in:name sort:updated-asc&page=${page}&per_page=${per_page}`;
    return this.httpClient.get(url);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
