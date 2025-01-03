import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '@ecommerce/product-data-access';

@Component({
  selector: 'ecommerce-product-card',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
