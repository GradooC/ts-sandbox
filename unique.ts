// const unique = (arr: number[]): number[] => {
//     return [...new Set(arr)];
// };

const unique = (arr: number[]): number[] => {
    const existed = new Set<number>();
    return arr.filter((item) => {
        const isExist = existed.has(item);
        !isExist && existed.add(item);
        return !isExist
    });
};

const result = unique([1, 1, 2, 2, 4, 2, 3, 7, 3]);
console.log('🚀 ~ file: unique.ts ~ line 6 ~ result', result);
