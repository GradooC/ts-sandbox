const isPalindrome = (str: string) => {
    const normalize = (str: string) => str.replace(/ /g, '').toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return normalize(str) === normalize(reversedStr);
};

console.log(isPalindrome('А роза упала на лапу Азора'));
