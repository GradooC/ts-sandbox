import { delay } from './utils/delay';

(async () => {
    const throttle = (fn: Function, ms: number = 500) => {
        let isThrottled = false;
        let savedArgs: any[];

        const wrapper = (...args: any[]) => {
            if (isThrottled) {
                savedArgs = args;
                return;
            }

            fn(...args);
            isThrottled = true;

            setTimeout(() => {
                isThrottled = false;
                if (savedArgs) {
                    fn(...savedArgs);
                    savedArgs = null;
                }
            }, ms);
        };

        return wrapper;
    };

    const throttledTest = throttle(console.log);

    throttledTest(1);
    await delay(50);
    throttledTest(2);
    await delay(50);
    throttledTest(3);
    await delay(600);
    throttledTest(4);
    await delay(50);
    throttledTest(5);
    await delay(50);
    throttledTest(6);
})();
