function getFibonacci(obj) {
    obj.length = Math.abs(obj.length);
    obj.min = Math.abs(obj.min);
    obj.max = Math.abs(obj.max);

    // errors
    if(validateFibo(obj)) {
        return validateFibo(obj);
    };

    let result = [];
    let start = Math.pow(10, obj.length - 1) || obj.min;
    let finish = Math.pow(10, obj.length - 1) * 10 - 1 || obj.max;
    let a, b, c;

    // console.log(start,finish)

    if (start === 0) {
        result.push(0, 1);
    }
    if (start === 1) {
        result.push(1);
    }

    do {
        a = b || 0;
        b = c || 1;
        c = a + b;
        if (c >= start && c <= finish) {
            result.push(c);
        }
    } while (c <= finish)

    return result;
}

function validateFibo(obj) {
    if (!Number.isInteger(obj.length) && obj.length > 0 || !Number.isInteger(obj.min) && obj.min > 0 || !Number.isInteger(obj.max) && obj.max > 0) {
        return {
            status: 'failed',
            reason: `Number needs to be whole`
        };
    }
    if (Math.abs(obj.min) > Math.abs(obj.max)) {
        return {
            status: 'failed',
            reason: 'Your min number is higher than max number'
        };
    }
    if (obj.length === 0) {
        return {
            status: 'failed',
            reason: `Length can't be 0`
        };
    }
}

export { getFibonacci };