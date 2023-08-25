import { add } from 'utils/add';

interface FibOptions {
  seq?: boolean;
}

type FibResult = number | number[];

export const fib = (n: number, opts?: FibOptions): FibResult => {
  const { seq = true } = opts || {};

  // TODO pre-allocate memory where necessary
  const sequence: number[] = [];

  let aOffset = 2;
  let bOffset = 1;

  for (let i = 0; i < n; i += 1) {
    if (i === 0 || i === 1) {
      sequence.push(i);
    } else {
      sequence.push(add(sequence[i - aOffset], sequence[i - bOffset]));
      if (seq === false) {
        // reduce space complexity
        sequence.splice(0, 1);
        aOffset += 1;
        bOffset += 1;
      }
    }
  }

  return seq === true ? sequence : sequence[sequence.length - 1];
};
