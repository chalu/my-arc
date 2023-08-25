import { fib } from './fib';

const firstNFib1 = (num: number): number[] => {
  const nums: number[] = [];

  const fib = (n: number): number => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n - 2) + fib(n - 1);
  };

  for (let i = 0; i < num; i += 1) {
    nums.push(fib(i));
  }

  console.log(nums);

  return nums;
};

const firstNFib = (num: number): number[] => {
  const sequence: number[] = [];

  for (let i = 0; i < num; i += 1) {
    if (i === 0 || i === 1) {
      sequence.push(i);
    } else {
      sequence.push(add(sequence[i - 2], sequence[i - 1]));
    }
  }

  return sequence;
};

const nFibs = fib(10);
console.log(nFibs);







// Create a function that takes a single integer parameter, n, and returns
// the first n elements of the Fibonacci sequence.

//  g(1) = [ 0 ]

//  g(2) = [ 0, 1 ]

//  g(3) = [ 0, 1, 1 ]

//  g(4) = [ 0, 1, 1, 2 ]

//  g(5) = [ 0, 1, 1, 2, 3 ]
//  [0, 1, 1]
