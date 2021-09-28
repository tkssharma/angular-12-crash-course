import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly productsService: ProductsService
  ) { }
  public product!: Product | null;
  public id!: string | null;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    alert(this.id);
    if (this.id) {
      this.product = this.productsService.getProductById(Number(this.id));
    }
  }
}
