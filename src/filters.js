export const filterByCategory = (category) => {
  return (products) => {
    return products.filter(product => product.category === category);
  };
};

export const filterInStock = (products) => {
  return products.filter(product => product.inStock === true);
};
