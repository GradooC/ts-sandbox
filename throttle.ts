import { delay } from './utils/delay';

(async () => {
    const throttle = (fn: Function, ms: number = 100) => {
        let timerId: number;

        return (...args: any[]) => {
            if (timerId) return;

            timerId = setTimeout(() => {
                fn(...args);
                timerId = null;
            }, ms);
        };
    };

    const test = () => {
        console.log('5');
    };

    const throttledTest = throttle(test);

    throttledTest();
    await delay(50);
    throttledTest();
    await delay(50);
    throttledTest();
    await delay(50);
    throttledTest();
    await delay(50);
    throttledTest();
    await delay(50);
    throttledTest();
})();
