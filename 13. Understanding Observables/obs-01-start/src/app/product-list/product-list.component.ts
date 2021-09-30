import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data: any;
  constructor(private readonly apiServiceService: ApiServiceService) { }

  ngOnInit() {
    console.log('hello i am Tarun')
    this.apiServiceService.getAllProducts().subscribe(
      (response: any) => {
        console.log(response);
        this.data = response
      },
      (error) => console.log(error)
    )
  }

}
