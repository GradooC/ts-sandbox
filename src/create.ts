const crate = <O extends Record<string, number>, R extends O>(obj: O): R => {
    const F = () => {};
    F.prototype = obj;
    const res = new F();
    return res;
};

const ex = crate({ a: 1 });

console.log(ex.a);
