import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   products: Product [] = [];
  constructor(private readonly productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.listAllProducts();
  }

}
