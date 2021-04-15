import { delay } from './debounce';

(async () => {
    const throttle = (fn: Function, ms: number = 100) => {
        let timerId: ReturnType<typeof setTimeout>;

        return (...args: any[]) => {
            if (timerId) return;

            timerId = setTimeout(() => {
                fn(...args);
                timerId = null;
            }, ms);
        };
    };

    const test = () => {
        console.log('!');
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
