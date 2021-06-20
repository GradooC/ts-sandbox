const arr1 = [1, [2, [3, [4, 5]]]];

export const flat = (arr): number[] => {
    return arr.reduce((acc, elem) => {
        return Array.isArray(elem) ? [...acc, ...flat(elem)] : [...acc, elem];
    }, []);
};

const res1 = flat([1, [2, [3, [4, 5]]]]);
