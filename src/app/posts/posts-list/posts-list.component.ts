import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {
  posts:Post[];
  getPostsSubscription:Subscription;

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.getPostsSubscription = this.postsService.getPosts().subscribe( response => {
      this.posts = (<Post[]>response);
    })
  }

  ngOnDestroy() {
    this.getPostsSubscription.unsubscribe();
  }

}
