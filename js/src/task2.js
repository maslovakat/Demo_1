function isFitEnvelope(first, second) {
    // find the longest and the shortest side of envelops
    let a = Math.max(Math.abs(first.w), Math.abs(first.h));
    let b = Math.min(Math.abs(first.w), Math.abs(first.h));
    let c = Math.max(Math.abs(second.w), Math.abs(second.h));
    let d = Math.min(Math.abs(second.w), Math.abs(second.h));

    // errors
    if(validateEnvelope(a,b,c,d)) {
        return validateEnvelope(a,b,c,d);
    }
    
    // calculating 
    if ((c <= a && d <= b) || (c > a && b >= (2 * c * d * a + (c * c - d * d) * Math.sqrt(c * c + d * d - a * a)) / (c * c + d * d))) {
        return 1;
    } else if ((a <= c && b <= d) || (c < a && b <= (2 * c * d * a + (c * c - d * d) * Math.sqrt(c * c + d * d - a * a)) / (c * c + d * d))) {
        return 2;
    } else {
        return 0;
    }
}

function validateEnvelope(a,b,c,d) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        return {
            status: 'failed',
            reason: 'You have written wrong type of data, please write number'
        };
    };
    if (a === 0 || b === 0 || c === 0 || d === 0) {
        return {
            status: 'failed',
            reason: 'Some fields are empty'
        };
    };
}
export {
    isFitEnvelope
}