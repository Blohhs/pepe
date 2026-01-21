export const sumPrices = (items) =>
  items.reduce((s, it) => s + (typeof it === 'number' ? it : it.price || 0), 0);

export const groupByCategory = (items) =>
  items.reduce((acc, it) => {
    const key = it.category || 'unknown';
    if (!acc[key]) acc[key] = [];
    acc[key].push(it);
    return acc;
  }, {});
