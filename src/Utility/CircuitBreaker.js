const circuitbreaker = (fn, totalRetryCount, timeThreshold) => {
    let failures = 0;
    let timeSinceLAstFail = 0;
    let serviceUnavailable = false;

    // if service is not available (when exceeded max totalRetryCount)
    if (serviceUnavailable) {
        // check if timeThreshold has exceeeded, again make service available to be used
        if (Date.now() - timeSinceLAstFail > timeThreshold) {
            serviceUnavailable = true;
            failures = 0;
            timeSinceLAstFail = 0;
        } else {
            throw "SERVICE UNAVAILABLE!";
        }
    }
    try {
        let result = fn(...args);
        failures = 0;
        serviceUnavailable = false;
        return result;
    } catch (e) {
        failures++;
        timeSinceLAstFail = Date.now();
        if (failures > totalRetryCount) {
            serviceUnavailable = true;
        }
    }
};

export const mockit = () => {
    let myAPICall = () => {
        let ct = 0;
        return function () {
            ct++;
            if (ct < 5) {
                throw "FAIL NOW!";
            } else {
                return "I have successsfully passed";
            }
        };
    };

    let apicall = myAPICall();
    let ccll = circuitbreaker(apicall, 4, 300);

    ccll();
    // c();
    // c();
    // c();
    // c();
    // setTimeout(() => {}, 2000);
};

export default circuitbreaker;
