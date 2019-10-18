'use strict';

const square = a => a * a;
const cube = a => a ** 3;
const average = (a, b) => (a + b) / 2;
const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    result.push(average(cube(i), square(i)));
  }
  return result;
};
module.exports = { square, cube, average, calculate };
