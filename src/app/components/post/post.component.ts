import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  imports: [CommonModule, MatIconModule],
  standalone: true,
})
export class PostComponent {
  @Input() post?: Post;
}
