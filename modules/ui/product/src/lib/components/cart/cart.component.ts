import { Component, input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ecommerce-cart',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  quantity = input.required<number>();
}
