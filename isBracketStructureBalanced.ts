const bracketTypes = {
    '(': { open: '(', close: ')' },
    ')': { open: '(', close: ')' },
    '[': { open: '[', close: ']' },
    ']': { open: '[', close: ']' },
    '{': { open: '{', close: '}' },
    '}': { open: '{', close: '}' },
    '<': { open: '<', close: '>' },
    '>': { open: '<', close: '>' },
} as const;

export const isBracketStructureBalanced = (str: string) => {
    const arr = [];

    for (let i = 0; i < str.length; i += 1) {
        const bracket = str[i];
        const { open, close } = bracketTypes[bracket];

        if (bracket === open) {
            arr.push(close);
        }

        if (bracket === close) {
            const current = arr.pop();
            if (current !== close) return false;
        }
    }

    return arr.length === 0;
};
console.time('Executing');
const res = isBracketStructureBalanced('({}[])()[]');
console.timeEnd('Executing');
console.log(res);
