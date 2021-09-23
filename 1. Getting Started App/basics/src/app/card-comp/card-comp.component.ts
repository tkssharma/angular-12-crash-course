import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Product } from './product.interface';

@Component({
  selector: 'app-card-comp',
  templateUrl: './card-comp.component.html',
  styleUrls: ['./card-comp.component.css']
})
export class CardCompComponent implements OnInit {

  constructor(private readonly ServiceService: ApiServiceService) { }

  label: string = "Hello world";
  products: Product[] = [];

  UserClicked(item: Product) {
    alert(JSON.stringify(item))
  }
  ngOnInit(): void {
    this.products = this.ServiceService.getProductData();
  }

}

/*

*/
