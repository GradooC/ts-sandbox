const colorRegexp = /#([0-9a-f]{3}){1,2}\b/gi;
export const getColors = (str: string) => str.match(colorRegexp);

const numberRegexp = /-?\d+(\.\d+)?/g;
export const getNumbers = (str: string) => str.match(numberRegexp);

const parseRegexp = /(-?\d+(?:\.\d+)?)\s?([-+*\/])\s?(-?\d+(?:\.\d+)?)/;
export const parse = (str: string) =>
    str.match(parseRegexp).filter((_, index) => index > 0);