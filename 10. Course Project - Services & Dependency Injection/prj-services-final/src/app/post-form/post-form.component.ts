import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export class Post {
  constructor() { }
  title: string;
  description: string;
}
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor() { }

  @Output() createPost = new EventEmitter();
  submitted: boolean = false;
  post: Post = new Post();

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    this.createPost.emit({
      title: this.post.title,
      description: this.post.description
    });
    // console.log(this.post)
  }

}
