import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { UsersService } from '../../services/users.service';
import { UserRepos } from '../../classes/user-repos';
import { Users } from 'src/app/classes/users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  users!: Users;
  user: any=[];
  htmlURL!: string;
  userRepos!: UserRepos;
  repos: any=[];

  constructor(private userinfo: UsersService) {}

  ngOnInit(): void {
    this.users = this.userinfo.users;
    this.repos = this.userinfo.repos;
    this.user.push(this.users)
  }

  redirection(url: any) {
    window.open(url, '_blank');
  }



}
