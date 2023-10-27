import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  searchUser(username: string){
    return this.http.get(`${this.apiUrl}/search/users?q=${username}`);
  }


}


