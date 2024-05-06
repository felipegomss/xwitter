import { Component } from '@angular/core';
import { Post } from '../../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  posts!: Post[];

  constructor(private profileService: PostsService) {}

  ngOnInit(): void {
    this.profileService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
