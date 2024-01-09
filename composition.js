import _ from 'lodash';

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

const users = [
  {
    id: 1,
    name: 'Ariel',
    lastName: 'Menéndez',
  },
];

const head = (x) => x[0];

const capitalizeNameAndLastName = (x) => ({
  name: _.upperFirst(x.name),
  lastName: _.upperFirst(x.lastName),
});

const generateName = (x) => `${x.name} ${x.lastName}`;

// const getFullName = (_users) =>
//   compose(generateName, capitalizeNameAndLastName, head)(_users);

// point free
const getFullName = compose(generateName, capitalizeNameAndLastName, head);

const x = getFullName(users);
console.log(x);
