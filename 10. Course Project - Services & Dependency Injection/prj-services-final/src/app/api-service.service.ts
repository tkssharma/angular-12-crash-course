import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

export interface Post {
  id: number;
  title: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  saveData(data: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
  updateData(id: number, data: any) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
  }
  deleteData(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
