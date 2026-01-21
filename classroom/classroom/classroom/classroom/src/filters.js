export const filterByCategory = (category) => (items) =>
  items.filter((item) => item.category === category);

export const filterInStock = (items) =>
  items.filter((item) => item.inStock === true);
