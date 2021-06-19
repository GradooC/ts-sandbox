export const searchInsert = (nums: number[], target: number): number => {
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] >= target) return i;
    }
    return nums.length;
};

console.time('Executing');
const res = searchInsert([1, 3, 5, 6], 2); // 1
console.timeEnd('Executing');
console.log(res);
