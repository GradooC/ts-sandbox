const obj1 = {
    a: 1,
    b: {
        c: 1
    }
};
console.log("🚀 ~ file: shallow.ts ~ line 7 ~ obj1", obj1)

obj1.b.c = 2

const obj2 = {
    a: 1,
    b: obj1.b
};
console.log("🚀 ~ file: shallow.ts ~ line 15 ~ obj2", obj2)

const isEqual = (o1, o2) => Object.keys(o1).every((key) => o1[key] == o2[key]);

console.log(isEqual(obj1, obj2));
