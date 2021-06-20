const { flat } = require("../flat");

describe("flat", () => {
    it("test", () => {
        const input = [1, [2, [3, [4, 5]]]];
        const expectedResult = [1, 2, 3, 4, 5];
        const result = flat(input);

        expect(result).toEqual(expectedResult);
    });
});
