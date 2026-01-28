import { pipe } from './pipeline.js';
import { filterInStock, filterByCategory } from './filters.js';
import { mapToNames, mapToPriceWithTax } from './mappers.js';
import { sumPrices, groupByCategory } from './reducers.js';

export const sortByPriceAsc = (products) => {
  return [...products].sort((a, b) => a.price - b.price);
};

export const sortByPriceDesc = (products) => {
  return [...products].sort((a, b) => b.price - a.price);
};

export const getNamesInStock = () => {
  return pipe(
    filterInStock,
    mapToNames,
    (names) => [...names].sort()
  );
};


export const getElectronicsWithTax = () => {
  const addTax = mapToPriceWithTax(0.15);г
  
  return pipe(
    filterByCategory('Electronics'),
    addTax,
    sortByPriceDesc
  );
};

export const getCategorySummary = () => {
  return pipe(
    groupByCategory,
    (grouped) => {
      return Object.entries(grouped).map(([category, products]) => ({
        category,
        total: sumPrices(products),
        count: products.length
      }));
    }
  );
};