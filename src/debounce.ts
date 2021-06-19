import { delay } from './utils/delay';

const assertEquals = (a: any, b: any) => {
    if (a === b) {
        console.log(`${a} === ${b}`);
        return true;
    }
    throw new Error(`${a} !== ${b}`);
};

(async () => {
    const debounce = <
        F extends (...args: any[]) => any,
        A extends Parameters<F>
    >(
        fn: F,
        delay: number
    ) => {
        let isBlocked = false;

        return (...args: A) => {
            if (isBlocked) return;

            fn(...args);
            isBlocked = true;

            setTimeout(() => {
                isBlocked = false;
            }, delay);
        };
    };

    let counter = 0;
    const updateState = (num: number = 1, str: string = '') => {
        counter += num;
    };

    const debouncedUpdate = debounce(updateState, 300);

    debouncedUpdate(1); // counter == 1
    debouncedUpdate(1); // counter == 1
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
