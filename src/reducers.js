export const sumPrices = (products) => {
  return products.reduce((total, product) => total + product.price, 0);
};


export const groupByCategory = (products) => {
  return products.reduce((grouped, product) => {
    const category = product.category;
    
    if (!grouped[category]) {
      grouped[category] = [];
    }
    
    grouped[category].push(product);
    return grouped;
  }, {});
};


export const countByCategory = (products) => {
  return products.reduce((counts, product) => {
    const category = product.category;
    counts[category] = (counts[category] || 0) + 1;
    return counts;
  }, {});
};


export const averagePriceByCategory = (products) => {
  const grouped = groupByCategory(products);
  
  return Object.keys(grouped).reduce((averages, category) => {
    const categoryProducts = grouped[category];
    const total = categoryProducts.reduce((sum, product) => sum + product.price, 0);
    averages[category] = Number((total / categoryProducts.length).toFixed(2));
    return averages;
  }, {});
};
