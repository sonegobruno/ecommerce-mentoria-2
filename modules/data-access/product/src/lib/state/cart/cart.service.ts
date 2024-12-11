import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private _cart$ = new BehaviorSubject<Product[]>([]);

  // readonly cart$ = this._cart$.asObservable();

  // readonly quantity$ = this._cart$.asObservable().pipe(
  //   map((products) => products.length)
  // )

  private _cart = signal<Product[]>([]);
  readonly cart = this._cart.asReadonly();
  readonly quantity = computed(() => this._cart().length);

  addToCart(product: Product) {
    // const currentCart = this._cart$.getValue()
    // this._cart$.next([...currentCart, product]);
    this._cart.update((currentCart) => [...currentCart, product]);
  }
}
