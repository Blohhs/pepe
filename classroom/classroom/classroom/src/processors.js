import { pipe } from './pipeline.js';
import { filterByCategory, filterInStock } from './filters.js';
import { mapToNames, mapToPriceWithTax } from './mappers.js';
import { sumPrices, groupByCategory } from './reducers.js';

export const sortByPriceAsc = (items) =>
  items.slice().sort((a, b) => a.price - b.price);
export const sortByPriceDesc = (items) =>
  items.slice().sort((a, b) => b.price - a.price);

// Pipelines
export const inStockNamesSortedAsc = pipe(
  filterInStock,
  sortByPriceAsc,
  mapToNames,
);

export const electronicsWithTaxDesc = pipe(
  filterByCategory('Electronics'),
  mapToPriceWithTax(0.2),
  sortByPriceDesc,
);

export const priceWithTaxGroupedByCategory = pipe(
  mapToPriceWithTax(0.1),
  groupByCategory,
);

// Helper pipeline demonstrating sum of prices for in-stock items
export const sumInStockPrices = (items) => {
  const inStock = filterInStock(items);
  return sumPrices(inStock);
};
