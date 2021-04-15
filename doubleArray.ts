export const doubleArray = (arr: number[]): number[] =>
    arr.reduce((acc, el) => (el ? [...acc, el * 2] : [...acc]), []);

console.time('Executing');
const res = doubleArray([1, 2, null, 7, 8, null, 3]);
console.timeEnd('Executing');
console.log(res);
