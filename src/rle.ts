const rle = (str: string): string => {
    let currentLetter = '';
    let counter = 0;
    const result = str.split('').reduce((acc, letter) => {
        if (letter === currentLetter) {
            counter += 1;
            return acc;
        }

        const item = `${currentLetter}${counter > 1 ? counter : ''}`;
        currentLetter = letter;
        counter = 1;
        return [...acc, item];
    }, []);

    return result.join('');
};

rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'
console.log(
    "🚀 ~ file: rle.ts ~ line 17 ~ rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD')",
    rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD')
);
