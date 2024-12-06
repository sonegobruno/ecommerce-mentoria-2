import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityDescription',
  standalone: true,
})
export class QuantityDescriptionPipe implements PipeTransform {
  transform(quantity: number): string {
    if (quantity === 0) {
      return 'Produto Indisponivel';
    } else if (quantity === 1) {
      return 'Ultimo Produto Disponivel';
    } else {
      return `${quantity} Produtos Disponiveis`;
    }
  }
}
