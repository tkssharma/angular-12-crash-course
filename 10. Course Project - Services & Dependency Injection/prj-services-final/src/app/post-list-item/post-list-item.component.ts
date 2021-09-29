import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../api-service.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Output() deletePost = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.deletePost.emit(id);
  }

}
