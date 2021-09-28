import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

export class ProductForm {
  name!: string;
  title!: string;
  description!: string;
  id!: number;
  logo!: string;
}
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private readonly productsService: ProductsService) { }

  model: ProductForm = new ProductForm()

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.model);
    // this.productsService.addProduct(this.model);
  }

}
