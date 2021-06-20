import { transform } from "../transform";

describe("transform", () => {
    it("should work correctly", () => {
        expect(transform([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
        expect(transform([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
        expect(transform([1, 2, 3, 4, 5], 3)).toEqual([4, 5, 1, 2, 3]);
        expect(transform([1, 2, 3, 4, 5], 6)).toEqual([2, 3, 4, 5, 1]);
        expect(transform([1, 2, 3, 4, 5], 11)).toEqual([2, 3, 4, 5, 1]);
        expect(transform([1, 2, 3, 4, 5], -1)).toEqual([5, 1, 2, 3, 4]);
        expect(transform([1, 2, 3, 4, 5], -11)).toEqual([5, 1, 2, 3, 4]);
        expect(transform([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
    });
});
