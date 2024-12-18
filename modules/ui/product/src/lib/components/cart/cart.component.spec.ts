import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBadge } from '@angular/material/badge';
import { By } from '@angular/platform-browser';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('quantity', 5);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render aria-label with quantity', () => {
    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('aria-label')).toBe(
      'Carrinho de compras com 5 produtos'
    );
  });

  it('should render matBadge with quantity', () => {
    const badge = fixture.debugElement
      .query(By.css('button'))
      .injector.get(MatBadge);
    expect(badge.content).toBe('5');
  });
});
