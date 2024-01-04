// reducer function
// const reducer = (accumulator, actualValue) => newAccumulator;

// const reduced = [1, 2].reduce((acc, el) => acc + el, 0);

const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((acc, el) => acc + el, 0);
// console.log(result);

const pets = [
  { name: 'Puchini', age: 12, type: 'dog' },
  { name: 'Chanchito feliz', age: 3, type: 'dog' },
  { name: 'Pulga', age: 10, type: 'dog' },
  { name: 'Pelusa', age: 12, type: 'cat' },
];

const indexed = pets.reduce(
  (acc, el) => ({
    ...acc,
    [el.name]: el,
  }),
  {}
);

// console.log(indexed['Pelusa']);

const nested = [1, [2, 3], 4, [5]];
// [1, 2, 3, 4, 5]

const flat = nested.reduce((acc, el) => acc.concat(el), []);
console.log(flat);
