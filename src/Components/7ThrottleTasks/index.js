// #1 throttle tasks counter
const throttleTasksCounter = (fn, count) => {
    let counter = 0;
    return function (...args) {
        const context = this;
        if (++counter !== count) return;
        counter = 0;
        fn.apply(context, args);
    };
};

// #2 classing way
const throttle = (fn, delay) => {
    let lastTimerId;
    let lastRan;
    return function (...args) {
        const context = this;

        if (!lastRan) {
            fn.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastTimerId);
            lastTimerId = setTimeout(() => {
                if (Date.now() - lastRan >= delay) {
                    fn.apply(context, args);
                    lastRan = Date.now();
                }
            }, delay - (Date.now() - lastRan));
        }
    };
};

// #3
function throttleFunction(
    fn,
    delay,
    option = { leading: true, trailing: true }
) {
    let lastTimerId;
    let lastRan;
}

// const throttleTasks = (fn, limit) => {
//     let lastFunc;
//     let lasRun;
//     return function() {

//     }
// }
