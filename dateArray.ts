export const arr = [
    new Date(2020, 2),
    new Date(2020, 1),
    new Date(2020, 5),
    new Date(2020, 3),
];

const res = 6
console.log("🚀 ~ file: dateArray.ts ~ line 9 ~ arr.sort((a, b) => a.getTime() - b.getTime())", arr.sort((a, b) => a.getTime() - b.getTime()))
