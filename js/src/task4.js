function findPolindrom(number) {
    number = Math.abs(number);

    //errors
    if(validatePolindrom(number)) {
        return validatePolindrom(number);
    }

    let str = String(number);
    let polindrom = [];
    let polindromList = [];

    // find first match
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            concatPolindrom(i, i + 1);
        };
        if (str[i - 1] === str[i + 1]) {
            polindrom.push(str[i])
            concatPolindrom(i - 1, i + 1);
        };
    }

    function concatPolindrom(prev, next) {
        // is not array length
        if (prev === -1 || next === str.length) {
            polindromList.push(polindrom.join(''));
            return polindrom = [];
        }

        if (str[prev] === str[next]) {
            polindrom.push(str[next]);
            polindrom.unshift(str[prev]);
            return concatPolindrom(--prev, ++next);
        } else {
            polindromList.push(polindrom.join(''));
            return polindrom = [];
        }
    }

    polindromList.sort((a, b) => b.length - a.length)
    return +polindromList[0] || 0;
}

function validatePolindrom(number) {
    if (isNaN(number)) {
        return {
            status: 'failed',
            reason: 'Wrong type of data: please write "number"'
        };
    }
    if (number === 0) {
        return {
            status: 'failed',
            reason: 'Field is empty'
        };
    }
    if (number < 10 || !Number.isInteger(number) && number > 0) {
        return {
            status: 'failed',
            reason: 'Wrong number: please write whole number higher than 9'
        };
    }
}

export {
    findPolindrom
};
