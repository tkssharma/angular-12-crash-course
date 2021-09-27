import { Component, OnInit } from '@angular/core';
import { AppDataService, Product } from '../app.data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private readonly appDataService: AppDataService) { }
  products: Product[];
  ngOnInit(): void {
    this.products = this.appDataService.getAllProducts();
  }

  addNewProduct(item: Product){
    this.products = this.appDataService.addNewProduct(item)
  }
  removeProduct(id: number){
    this.products = this.appDataService.removeProduct(id)
  }

}
