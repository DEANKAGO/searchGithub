import { Injectable } from '@angular/core';
import { Users } from '../classes/users';
import { Repository } from '../classes/repository';
import { UserRepos } from '../classes/user-repos';
import { HttpProcessorService } from '../services/http-processor.service';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})



export class UsersService {

  private apiKey = environment.apiKey;

  users: Users;
  userRepositories!: [any];
  userRepos!: UserRepos;
  repos: any = [];
  allRepos!: Repository;
  totalRepos: any = [];
  


  constructor(private http: HttpProcessorService) {
    this.users = new Users("", 0, 0, "", "", new Date(), "", "", "", "");
    this.userRepos = new UserRepos("", "", "", "", 0, 0, 0,new Date(), "");
    this.totalRepos = new Repository("", "", "", 0, 0, 0, new Date(), "", "");


  }


  userApi(url: string){
    this.repos.length = 0
    this.http.fetchApi(`${url}`).subscribe((response) => {
      this.users.name = response.login;
      this.users.following = response.following_url;
      this.users.followers = response.followers_url;
      this.users.bio = response.bio;
      this.users.image = response.avatar_url;
      this.users.creationDate = response.created_at;
      this.users.location = response.location;
      this.users.email = response.email;
      this.users.hireable = response.hireable;
      this.users.htmlURL = response.html_url;        
      console.log(response)

    })
    
    // return this.http.get(`${this.apiUrl}/search/users?q=${username}`);

    this.http.fetchApi(`${url}/repos?order=desc&sort=created&`).subscribe((response) => {
      console.log(response);
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
          console.log(resp);
      })
    })
  }

  repoSearch(url: string) {
    this.totalRepos.length = 0;
    this.http.fetchApi(`${url}`).subscribe((response) => {
      let allReposList : any;
      response.items.map((res: any) => {
        allReposList = new Repository(
          res.name, 
          res.description, 
          res.owner.login, 
          res.stargazers_count, 
          res.watchers_count,
          res.forks_count, 
          res.created_at, 
          res.html_url, 
          res.homepage);
        this.totalRepos.push(allReposList)
      })

    })
  }


}


