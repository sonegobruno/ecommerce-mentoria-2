import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { mockProducts } from '@ecommerce/product-data-access';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = mockProducts;
}
