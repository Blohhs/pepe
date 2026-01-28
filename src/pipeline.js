export const pipe = (...functions) => {
  return (initialData) => {
    return functions.reduce((data, fn) => fn(data), initialData);
  };
};
