import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';

@Injectable()

export class ApiService {
  constructor(private http: Http) {}

  getProfileData(id) {
    return this.http.get(`https://api.github.com/users/${id}`);
  }

  getRepos(id) {
    return this.http.get(`https://api.github.com/users/${id}/repos`);
  }
}
