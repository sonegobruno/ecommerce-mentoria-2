import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RecommendedProductsService } from '@ecommerce/product-data-access';
import { Product } from 'modules/data-access/product/src/lib/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$: Observable<Product[]>;

  constructor(private recommendedProductsService: RecommendedProductsService) {
    this.products$ = this.recommendedProductsService.getProducts();
  }
}
