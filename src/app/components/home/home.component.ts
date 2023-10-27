import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';
  results: any;

  constructor(private usersService: UsersService) {}

  search(){
    this.usersService.searchUser(this.username).subscribe((user) => {
      this.results = user
      // console.log(user);
      console.log(this.results )
    })
  }



}
