import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private readonly httpClient: HttpClient) { }


  public getAllProducts() {
    return this.httpClient.get('localhost:3000/products');
  }
}
