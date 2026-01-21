import { data } from './data.js';
import {
  inStockNamesSortedAsc,
  electronicsWithTaxDesc,
  priceWithTaxGroupedByCategory,
  sumInStockPrices,
} from './processors.js';

console.log('--- In-stock product names sorted by price (asc) ---');
console.log(inStockNamesSortedAsc(data));

console.log('\n--- Electronics with 20% tax sorted by price (desc) ---');
console.log(electronicsWithTaxDesc(data));

console.log('\n--- All products with 10% tax grouped by category ---');
console.log(priceWithTaxGroupedByCategory(data));

console.log('\n--- Sum of prices for in-stock items ---');
console.log(sumInStockPrices(data));
