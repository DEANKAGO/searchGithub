import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  inputData: string='';


  constructor(private info:UsersService, public router: Router) {}

  userSearch(myForm: NgForm) {
    if (this.inputData==='') {
      alert("Search field cannot be empty");
      return;
    }
    this.info.userApi(`@api.github.com/users/${this.inputData}`)
    this.router.navigate(['/search'])
    myForm.reset()
    
  }

  repoSearch(myForm: NgForm) {
    if (this.inputData==='') {
      alert("Search field cannot be empty");
      return;
    }
    this.info.repoSearch(`@api.github.com/users/search/repos?q=${this.inputData}&order=desc&sort=stars&page=1&per_page=17`)
    this.router.navigate([''])
    myForm.reset()
  }

  



}
