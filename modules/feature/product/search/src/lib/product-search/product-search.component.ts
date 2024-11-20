import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ProductSearchService } from '@ecommerce/product-data-access';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'ecommerce-product-search',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AsyncPipe,
    RouterModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent {
  control = new FormControl('', { nonNullable: true });

  products$ = this.control.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    filter((text) => text?.length > 0),
    switchMap((text) => this.productSearchService.searchByName(text))
  );

  constructor(private productSearchService: ProductSearchService) {}
}
