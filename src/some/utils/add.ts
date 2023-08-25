import { log } from 'some/log';

export const add = (...nums: number[]): number => {
  log(nums);
  return nums.reduce((sum, n) => sum + n, 0);
};
