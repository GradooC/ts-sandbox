export const flat = (arr): number[] => {
    return arr.reduce((acc, elem) => {
        return Array.isArray(elem) ? [...acc, ...flat(elem)] : [...acc, elem];
    }, []);
};
