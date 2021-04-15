const bracketTypes = [
    { open: '(', close: ')' },
    { open: '[', close: ']' },
    { open: '{', close: '}' },
    { open: '<', close: '>' },
] as const;

const isBracketStructureBalanced = (str: string) => {
    let arr = [];

    for (let i = 0; i < str.length; i += 1) {
        const bracket = str[i];
        const { open, close } = bracketTypes.find(
            ({ open, close }) => bracket === open || bracket === close
        );

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

console.log(isBracketStructureBalanced('({[}])()[]'));
// console.log(isBracketStructureBalanced('[)]('));
// console.log(isBracketStructureBalanced('())({}}{()][][)'));
