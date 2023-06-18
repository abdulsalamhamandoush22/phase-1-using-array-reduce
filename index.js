const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const batteries = [
  5,
  8,
  3,
  1,
  7,
  2,
  5
];

const totalBatteries = batteries.reduce(reducer, 0);
