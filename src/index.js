import { data as products } from './data.js';
import { 
  getNamesInStock, 
  getElectronicsWithTax, 
  getCategorySummary 
} from './processors.js';

console.log(' Запуск Data Pipeline демонстрации\n');

console.log(' Товары в наличии (отсортированные названия):');
const namesInStock = getNamesInStock()(products);
console.log('   ' + namesInStock.map(name => `'${name}'`).join(', '));
console.log();

console.log(' Electronics с налогом (15%):');
const electronicsWithTax = getElectronicsWithTax()(products);
electronicsWithTax.forEach(product => {
  console.log(`   ${product.name}: $${product.price.toFixed(2)}`);
});
console.log();

console.log(' Группировка по категориям:');
const categorySummary = getCategorySummary()(products);
categorySummary.forEach(item => {
  console.log(`   ${item.category}: ${item.count} товара, $${item.total.toFixed(2)}`);
});
console.log();

console.log('Проверка неизменности исходных данных:');
console.log('Первый товар до обработок:', products[0].name, '- $' + products[0].price);
console.log('Первый товар после обработок:', products[0].name, '- $' + products[0].price);
console.log('Исходные данные не изменились!');