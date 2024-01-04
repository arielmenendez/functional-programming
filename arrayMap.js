// total sum function
const sum = (ns) => {
  let accumulated = 0;
  for (i = 0; i < ns.length; i++) {
    accumulated += ns[i];
  }

  return accumulated;
};

const numbers = [1, 2, 3, 4, 5];
// multiply * 2
// const multiplied = numbers.map((x) => x * 2);
// console.log(multiplied);
// to pairs
// const pairs = numbers.map((x) => [x, x]);
// console.log(pairs);

const pets = [
  { name: 'Puchini', age: 12, type: 'dog' },
  { name: 'Chanchito feliz', age: 3, type: 'dog' },
  { name: 'Pulga', age: 10, type: 'dog' },
  { name: 'Pelusa', age: 12, type: 'cat' },
];
// average age
const ages = pets.map((x) => x.age);
const result = sum(ages);
console.log(result / ages.length);
