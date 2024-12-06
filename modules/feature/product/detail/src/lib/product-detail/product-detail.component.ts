import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product, ProductSearchService } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { Observable, switchMap } from 'rxjs';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';
import { getParams } from './get-params';

@Component({
  selector: 'lib-product-detail',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, QuantityDescriptionPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productSearchService = inject(ProductSearchService);

  product$: Observable<Product> = getParams().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
