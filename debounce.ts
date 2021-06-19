import { delay } from './utils/delay';

const assertEquals = (a: any, b: any) => {
    if (a === b) {
        console.log(`${a} === ${b}`);
        return true;
    }
    console.log(`${a} !== ${b}`);
    return false;
};

(async () => {
    const debounce = <
        F extends (...args: any[]) => any,
        Args extends Parameters<F>
    >(
        fn: F,
        ms: number = 0
    ) => {
        let timerId: ReturnType<typeof setTimeout>;
        return (...args: Args) => {
            clearTimeout(timerId);
            timerId = setTimeout(fn, ms, args);
        };
    };

    let counter = 0;
    const updateState = (num: number = 1, str: string = '') => {
        counter + num;
    };
    const debouncedUpdate = debounce(updateState, 300);
    debouncedUpdate(2); // counter == 1
    debouncedUpdate(); // counter == 1
    await delay(300); // counter == 1
    assertEquals(counter, 1);
    debouncedUpdate(); // counter == 2
    debouncedUpdate(); // counter == 2
    debouncedUpdate(); // counter == 2
    debouncedUpdate(); // counter == 2
    debouncedUpdate(); // counter == 2
    debouncedUpdate(); // counter == 2
    await delay(300); // counter == 2
    assertEquals(counter, 2);
})();
