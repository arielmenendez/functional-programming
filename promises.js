import isomorphicFetch from 'isomorphic-fetch';

// const p1 = Promise.resolve(1);

// console.log(p1);

// p1.then((x) => x + 5)
//   .then((x) => Promise.resolve(x + 5))
//   .then((x) => Promise.reject('Error! something went wrong'))
//   .then((x) => console.log('This is not going to be called'))
//   .catch((e) => console.log(e));

const delayed = (x) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(x), 900));

delayed(7)
  .then((x) => {
    console.log(x);
    return delayed(x + 7);
  })
  .then((x) => console.log(x))
  .then((x) => Promise.reject('Something went wrong :('))
  .catch((e) => console.log(e));

isomorphicFetch('https://jsonplaceholder.typicode.com/users')
  .then((x) => x.json())
  .then((x) => console.log(x));
