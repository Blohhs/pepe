export const mapToNames = (products) => {
  return products.map(product => product.name);
};

export const mapToPriceWithTax = (taxRate) => {
  return (products) => {
    return products.map(product => ({
      ...product,
      price: Number((product.price * (1 + taxRate)).toFixed(2))
    }));
  };
};
