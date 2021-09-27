import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../app.data.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  @Output() addNewProduct = new EventEmitter();
  @Output() removeProduct = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.addNewProduct.emit()
  }
  remove(){
    this.removeProduct.emit()
  }


}
