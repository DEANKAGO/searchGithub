import { Injectable } from '@angular/core';
import { Users } from '../classes/users';
import { Repository } from '../classes/repository';
import { UserRepos } from '../classes/user-repos';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class UsersService {

  private apiKey = environment.apiKey;

  users!: Users;
  userRepositories!: [any];
  userRepos!: UserRepos;
  repos: any = [];
  allRepos!: Repository;
  totalRepos: any = [];
  


  constructor(private http: HttpClient) {
    this.users = new Users("", 0, 0, 0, "", "", new Date(), "", "", "", "");
  }


  userApi(url: string){
    this.repos.length = 0
    this.http.get<any>(`${this.apiKey}/users`).subscribe((response) => {
      this.users.name = response.login;
      this.users.following = response.following;
      this.users.followers = response.followers;
      this.users.publicRepositories = response.publicRepositories;
      this.users.bio = response.bio;
      this.users.image = response.avatar_url;
      this.users.creationDate = response.created_at;
      this.users.location = response.location;
      this.users.email = response.email;
      this.users.hireable = response.loghireablein;
      this.users.htmlURL = response.html_url;
      console.log(this.users)

    })
    
    // return this.http.get(`${this.apiUrl}/search/users?q=${username}`);

    this.http.get<any>(`${this.apiKey}/repos?order=desc&sort=created&`).subscribe((response) => {
      let resp: any;

      response.map((res: any) => {
        resp = new UserRepos(
          res.name, 
          res.description, 
          res.homepage, 
          res.owner.login,
          res.stargazers_count,
          res.watchers_count,
          res.created_at,
          res.forks_count,
          res.html_url,
          );
          this.repos.push(resp);
      })
    })
  }

  repoSearch(url: string) {
    this.totalRepos.length = 0;
    this.http.get<any>(this.apiKey).subscribe((response) => {
      let allReposList : any;
      response.items.map((res: any) => {
        allReposList = new Repository(
          res.name, 
          res.description, 
          res.owner.login, 
          res.stargazers_count, 
          res.watchers_count, 
          res.created_at,
          res.forks_count, 
          res.html_url, 
          res.homepage);
        this.totalRepos.push(allReposList)
      })

    })
  }


}


