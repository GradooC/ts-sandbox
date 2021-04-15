// const f = (arr: number[]): number[] => arr.filter(Boolean).map((el) => el * 2);
const f = (arr: number[]): number[] =>
    arr.reduce((acc, el) => (el ? [...acc, el * 2] : [...acc]), []);

f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]
console.log(
    '🚀 ~ file: doubleArray.ts ~ line 4 ~ f([1, 2, null, 7, 8, null, 3])',
    f([1, 2, null, 7, 8, null, 3])
);
