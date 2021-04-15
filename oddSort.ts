// const oddSort = (arr: number[]) => {
//     let even: { elem: number; index: number }[] = [];
//     let odd: number[] = [];

//     arr.forEach((elem, index) => {
//         if (elem % 2 === 0) {
//             even = [...even, { elem, index }];
//         }
//         if (elem % 2 !== 0) {
//             odd = [...odd, elem];
//         }
//     });

//     const sortedOdd = odd.sort((a, b) => a - b);

//     even.forEach(({ elem, index }) => {
//         sortedOdd.splice(index, 0, elem);
//     });

//     return sortedOdd;
// };

function oddSort(arr) {
	arr.forEach((item, index) => {
		if (item % 2 === 1) {
			let sortNumber = item;

			for (let i = 0; i < index; i++) {
				if (arr[i] % 2 === 1) {
					if (arr[i] > sortNumber) {
						const tmp = sortNumber;

						sortNumber = arr[i];
						arr[i] = tmp;
					}
				}
			}
			arr[index] = sortNumber;
		}
	});

	return arr;
}
console.time()
const res = oddSort([7, 3, 4, 9, 5, 2, 17]); // => [3, 5, 4, 7, 9, 2, 17]
console.timeEnd();

console.log(res)