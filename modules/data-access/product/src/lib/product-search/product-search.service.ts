import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  constructor(private httpClient: HttpClient) {}

  searchByName(name: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`/products`, {
      params: {
        name,
      },
    });
  }

  getById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`/products/${id}`);
  }
}
