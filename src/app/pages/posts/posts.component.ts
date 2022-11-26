import { Router } from '@angular/router';
import { UsersService } from './../../service/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private UsersService: UsersService, private router: Router) {}
  ngOnInit(): void {
    if (this.UsersService.user == undefined || this.UsersService.user == null) {
      var str = localStorage.getItem('user');
      if (str != null) {
        this.UsersService.user = JSON.parse(str);
        this.router.navigate(['/posts']);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
  postschema = {
    userName: '',
    imageURL: '',
    text: '',
    likes: [],
    comment: [{ userName: '', comment: '' }],
  };
}
