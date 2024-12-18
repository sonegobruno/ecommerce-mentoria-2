import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce/layout';
import { CartService } from '@ecommerce/product-data-access';
import { ProductSearchComponent } from '@ecommerce/product-search';
import { CartComponent } from '@ecommerce/product-ui';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule, ProductSearchComponent, CartComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly cartService = inject(CartService);
}
