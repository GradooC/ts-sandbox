type Tree = {
    value: number;
    children?: Tree[];
};

const tree: Tree = {
    value: 9,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: [
                        {
                            value: 6,
                        },
                    ],
                },
                { value: 5 },
            ],
        },
        {
            value: 3,
            children: [{ value: 6 }, { value: 7 }],
        },
    ],
};

// const getTreeValues = (tree: Tree) => {
//     const test = (children: any[] = [], acc) =>
//         children.reduce(
//             (acc, item) =>
//                 Boolean(item.children)
//                     ? test(item.children, acc + item.value)
//                     : acc + item.value,
//             acc
//         );

//     return test(tree.children, tree.value);
// };

// const getTreeValues = (tree: Tree) => {
//     const tmpTree = [tree];
//     const res = [];
//     let current: Tree;

//     while (tmpTree.length > 0) {
//         current = tmpTree.shift();
//         res.push(current.value);
//         if (current.children) {
//             current.children.forEach((node) => tmpTree.push(node));
//         }
//     }

//     return res;
// };

// const getTreeValues = (tree: Tree) => {
//     const pusher = (children: Tree[] = [], acc: number[]) => {
//         return children.reduce((acc, { value, children }) => {
//             return Boolean(children)
//                 ? [...acc, ...pusher(children, [value])]
//                 : [...acc, value];
//         }, acc);
//     };

//     return pusher(tree.children, [tree.value]);
// };

const getTreeValues = (tree: Tree) =>
    [tree].reduce((acc, { value, children }) => {
        return Boolean(children) ? 
    }, []);

console.log(getTreeValues(tree));
