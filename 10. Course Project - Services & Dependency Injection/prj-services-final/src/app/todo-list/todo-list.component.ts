import { Component, OnInit } from '@angular/core';
import { ApiServiceService, Post } from '../api-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private readonly apiServiceService: ApiServiceService) { }
  posts: Post[] = [];
  ngOnInit(): void {
    /*
    this.apiServiceService.fetchData().toPromise().then(data => {
      console.log(data);
    })
    */
    this.apiServiceService.fetchData().subscribe(
      (response: Post[]) => {
        console.log(response);
        this.posts = response
      },
      (error) => console.log(error)
    )
  }
  createPostData(data) {
    alert(JSON.stringify(data));
    this.apiServiceService.saveData(data).subscribe(
      (response: Post[]) => {
        this.posts = response
      },
      (error) => console.log(error)
    )
  }
  deletePostAction(id: number){
    this.apiServiceService.deleteData(id).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => console.log(error)
    )
  }

}
