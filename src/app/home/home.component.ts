import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Post } from '../posts/post.model';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:Post[];

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.postsService.getPosts(5).subscribe( response => {
      this.posts = (<Post[]>response);
    });
  }

}
