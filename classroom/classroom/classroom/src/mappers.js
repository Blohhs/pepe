export const mapToNames = (items) => items.map((i) => i.name);

export const mapToPriceWithTax = (tax) => (items) =>
  items.map((i) => ({ ...i, price: +((i.price || 0) * (1 + tax)).toFixed(2) }));
