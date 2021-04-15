// const isEqualSymbols = (str1: string, str2: string) => {
//     const regExp = new RegExp(`[${str1}]`, 'g');
//     return str2.match(regExp).length === str2.length;
// };

function isEqualSymbols(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
		return true;
	}

	return false;
}

console.time();
isEqualSymbols('кот', 'ток'); // => true
isEqualSymbols('кот', 'тик'); // => false
console.timeEnd();
