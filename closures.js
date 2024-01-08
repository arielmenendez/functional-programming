import isomorphicFetch from 'isomorphic-fetch';

const crudder = (domain) => (resource) => {
  const url = `${domain}/${resource}`;

  return {
    create: (x) =>
      isomorphicFetch(url, {
        method: 'POST',
        body: JSON.stringify(x),
      }).then((x) => x.json()),
    get: () => isomorphicFetch(url).then((x) => x.json()),
  };
};

const Base = crudder('https://jsonplaceholder.typicode.com');
const Todos = Base('/todos');
const Users = Base('/users');

// Todos.get().then((x) => console.log(x[0]));
Users.get().then((x) => console.log(x[0]));

// const x = 'Fluffy';

// const f = () => {
//   const y = 'Kins';
//   console.log(x, y);
// };

// f();
