export const transform = (list: number[], offset: number): number[] => {
    const { length } = list;
    const base = offset % length;

    const mapper = (el: number): number => {
        const sum = el + base;
        if (sum === 0) return length;
        if (sum > length) return sum % length;
        return sum;
    };

    return list.map(mapper);
};
