type F = (...args: any[]) => any;

const memo = (f: F): F => {
    const cache = new Map<string, any>();
    return (...args: any[]) => {
        const index = JSON.stringify(args);
        if (cache.has(index)) return cache.get(index);
        const result = f(...args);
        cache.set(index, result);
        return result;
    };
};

const func = (k: number, m: number) => {
    console.log(k, m);
    return '!!!';
};

const funcMem = memo(func);
funcMem(2, 3);
console.log(funcMem(2, 3));
funcMem(2, 6);
