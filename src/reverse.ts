export const reverse = (x: number): number => {
    const negation = x < 0 ? -1 : 1;
    const reversedStr = String(Math.abs(x)).split('').reverse().join('');
    const result = Number(reversedStr) * negation;
    if (result > 2 ** 31 - 1) return 0;
    if (result < -1 * 2 ** 31) return 0;
    return Number(reversedStr) * negation;
};

console.time('Executing');
const res = reverse(-123); // 321
console.timeEnd('Executing');
console.log(res);
