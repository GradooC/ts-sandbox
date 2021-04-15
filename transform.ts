export function isEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

function transform(list: number[], offset: number): number[] {
    const { length } = list;
    const base = offset % length;

    const mapper = (el: number): number => {
        const sum = el + base;
        if (sum === 0) return length;
        if (sum > length) return sum % length;
        return sum;
    };

    return list.map(mapper);
}

console.log(isEqual(transform([1, 2, 3, 4, 5], 0), [1, 2, 3, 4, 5]));
console.log(isEqual(transform([1, 2, 3, 4, 5], 2), [3, 4, 5, 1, 2]));
console.log(isEqual(transform([1, 2, 3, 4, 5], 3), [4, 5, 1, 2, 3]));
console.log(isEqual(transform([1, 2, 3, 4, 5], 6), [2, 3, 4, 5, 1]));
console.log(isEqual(transform([1, 2, 3, 4, 5], 11), [2, 3, 4, 5, 1]));
console.log(isEqual(transform([1, 2, 3, 4, 5], -1), [5, 1, 2, 3, 4]));
console.log(isEqual(transform([1, 2, 3, 4, 5], -11), [5, 1, 2, 3, 4]));
console.log(isEqual(transform([1, 2, 3, 4, 5], 4), [5, 1, 2, 3, 4]));
