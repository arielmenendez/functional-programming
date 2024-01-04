const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pets = [
  { name: 'Puchini', age: 12, type: 'dog' },
  { name: 'Chanchito feliz', type: 3, breed: 'dog' },
  { name: 'Pulga', age: 10, type: 'dog' },
  { name: 'Pelusa', age: 12, type: 'cat' },
];

// const filteredNumbers = numbers.filter((x) => x < 5);
// console.log(filteredNumbers, numbers);

const dogs = pets.filter((x) => x.type === 'dog');
const cats = pets.filter((x) => x.type === 'cat');

console.log(cats);
