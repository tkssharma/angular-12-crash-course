import { Injectable } from '@angular/core';


export interface Product {
  name: string;
  id: number,
  title: string;
  price: string;
  size: string;
  brand: string;
  type: string;
  quantity: string;
}
@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  products: Product[] = [{
    name: '',
    id: 1,
    title: '',
    price: '',
    size: '',
    brand: '',
    type: '',
    quantity: ''
  }]
  constructor() { }

  public getAllProducts(): Product[] {
    return this.products;
  }
  public addNewProduct(item: Product): Product[] {
    this.products.push(item);
    return this.products;
  }
  public removeProduct(id: number): Product[] {
    return this.products.filter(i => i.id !== id)
  }
  public updateProduct(): Product[] {
    return []
  }
}
