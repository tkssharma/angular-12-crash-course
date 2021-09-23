import { Injectable } from '@angular/core';
import { Product } from './card-comp/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public getProductData(): Product [] {
    return [
      {
        name: 'Test',
        type: 'Test2',
        image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_416,c_limit/8cbfc9f1-5625-4cac-9127-d3938b1e47ec/waffle-one-shoes-Z3BFbK.png',
        logo: '',
      },
      {
        name: 'Test1',
        type: 'Test1',
        image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_416,c_limit/8cbfc9f1-5625-4cac-9127-d3938b1e47ec/waffle-one-shoes-Z3BFbK.png',
        logo: '',
      },
      {
        name: 'Test2',
        type: 'Test2',
        image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_416,c_limit/8cbfc9f1-5625-4cac-9127-d3938b1e47ec/waffle-one-shoes-Z3BFbK.png',
        logo: '',
      },
      {
        name: 'Test3',
        type: 'Test3',
        image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_416,c_limit/8cbfc9f1-5625-4cac-9127-d3938b1e47ec/waffle-one-shoes-Z3BFbK.png',
        logo: '',
      },
      {
        name: 'Test4',
        type: 'Test4',
        image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_416,c_limit/8cbfc9f1-5625-4cac-9127-d3938b1e47ec/waffle-one-shoes-Z3BFbK.png',
        logo: '',
      },
      {
        name: 'Test5',
        type: 'Test5',
        image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_416,c_limit/8cbfc9f1-5625-4cac-9127-d3938b1e47ec/waffle-one-shoes-Z3BFbK.png',
        logo: '',
      }
    ]
  }
  constructor() { }
}
