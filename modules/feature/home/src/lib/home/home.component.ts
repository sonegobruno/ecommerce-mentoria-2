import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  Product,
  RecommendedProductsService,
} from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$: Observable<Product[]>;

  constructor(private recommendedProductsService: RecommendedProductsService) {
    this.products$ = this.recommendedProductsService.getProducts();
  }
}
