import { getColors, getNumbers, parse } from "../regexp";

describe("regex", () => {
    it("getColors", () => {
        const str = "color: #3f3; background-color: #AA00ef; and: #abcd";
        expect(getColors(str)).toEqual(["#3f3", "#AA00ef"]);
    });

    it("getNumbers", () => {
        const str = "-1.5 0 2 -123.4.";
        expect(getNumbers(str)).toEqual(["-1.5", "0", "2", "-123.4"]);
    });

    it("parse", () => {
        const str = "1.2 * 3.4";
        expect(parse(str)).toEqual(["1.2", "*", "3.4"]);
    });
});
