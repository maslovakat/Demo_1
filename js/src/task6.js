function getNumberSequence(sequenceLength, start) {
    sequenceLength = Math.abs(sequenceLength);
    start = Math.abs(start);
    let i = Math.floor(Math.sqrt(start));

    if(validateSequence(sequenceLength, start)) {
        return validateSequence(sequenceLength, start);
    }

    let result = [];
    do {
        if (Math.pow(i, 2) >= start) {
            result.push(i);
        }
        i++;
    } while (result.length < sequenceLength);

    return result;
}

function validateSequence(sequenceLength, start) {
    if (!Number.isInteger(sequenceLength) && sequenceLength > 0 || !Number.isInteger(start) && start > 0) {
        return {
            status: 'failed',
            reason: `Number needs to be whole`
        };
    }
    if (isNaN(sequenceLength) || isNaN(start)) {
        return {
            status: 'failed',
            reason: 'You have written a wrong type of parameter'
        };
    }
    if (sequenceLength === 0 || start === 0) {
        return {
            status: 'failed',
            reason: 'Please write whole number'
        };
    }
}

export {
    getNumberSequence
};