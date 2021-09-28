import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  title: string;
  description: string;
  id: number;
  logo: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products: Product[] = [{
    name: 'Test',
    title: 'Testing',
    description: 'Testing product',
    id: 1,
    logo: 'https://tkssharma.com/static/profile-a533cbd7b0a7d2fa2191a3cbb2a34441.png'
  }, {
    name: 'Test2',
    title: 'Testing',
    description: 'Testing product',
    id: 2,
    logo: 'https://tkssharma.com/static/profile-a533cbd7b0a7d2fa2191a3cbb2a34441.png'
  }, {
    name: 'Test3',
    title: 'Testing',
    description: 'Testing product',
    id: 3,
    logo: 'https://tkssharma.com/static/profile-a533cbd7b0a7d2fa2191a3cbb2a34441.png'
  }]
  public getProductById(id: number): Product | null {
    const product = this.products.filter(i => i.id === id);
    if (product && product.length > 0) {
      return product[0]
    } else {
      return null;
    }
  }

  public listAllProducts(): Product[] {
    return this.products;
  }

  public addProduct(item: Product): Product[] {
    this.products.push(item);
    return this.products;
  }
}
