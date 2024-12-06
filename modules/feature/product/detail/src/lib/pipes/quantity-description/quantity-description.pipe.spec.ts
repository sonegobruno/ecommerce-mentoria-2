import { QuantityDescriptionPipe } from './quantity-description.pipe';

describe('QuantityDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new QuantityDescriptionPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return unavailable product text', () => {
    const pipe = new QuantityDescriptionPipe();
    const result = pipe.transform(0);
    expect(result).toBe('Produto Indisponivel');
  });
  it('should return text from only one product', () => {
    const pipe = new QuantityDescriptionPipe();
    const result = pipe.transform(1);
    expect(result).toBe('Ultimo Produto Disponivel');
  });
  it('should return text from many products', () => {
    const pipe = new QuantityDescriptionPipe();
    const result = pipe.transform(10);
    expect(result).toBe('10 Produtos Disponiveis');
  });
});
