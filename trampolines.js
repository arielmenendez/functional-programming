const trampoline =
  (fn) =>
  (...args) => {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };

// const sum = (number, accumulator = 0) =>
//   number === 0 ? accumulator : sum(number - 1, accumulator + number);

// const r = sum(10000);
// console.log(r);

const sum = (number, accumulator = 0) =>
  number === 0 ? accumulator : () => sum(number - 1, accumulator + number);

const tsum = trampoline(sum);
const r = tsum(1000000);
console.log(r);
