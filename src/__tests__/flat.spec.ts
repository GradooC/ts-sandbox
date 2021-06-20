import { flat } from "../flat";

describe("flat", () => {
    it("should work correctly", () => {
        const input = [1, [2, [3, [4, 5]]]];
        const expectedResult = [1, 2, 3, 4, 5];
        const result = flat(input);

        expect(result).toEqual(expectedResult);
    });
});
