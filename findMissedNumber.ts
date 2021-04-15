export const findMissedNumber = (arr1: number[], arr2) => {
    const getSum = (acc, item) => acc + item;
    return arr1.reduce(getSum, 0) - arr2.reduce(getSum, 0);
};

const res = findMissedNumber(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 9, 10]
);
console.log('🚀 ~ file: findMissedNumber.ts ~ line 5 ~ res', res);
