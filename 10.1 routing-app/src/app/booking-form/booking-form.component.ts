import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
export class User {
  firstname!: string;
  lastname!: string;
  mail!: string;
  password!: string;
}

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  constructor(private readonly productsService: ProductsService) { }

  model: User = new User()

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.model);
    // this.productsService.addProduct(this.model);
  }
}
