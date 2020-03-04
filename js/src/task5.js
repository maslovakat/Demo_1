// import { validation } from "./validation";

function getLuckyTicket(obj) {
    let min = Math.abs(obj.min);
    let max = Math.abs(obj.max);

    if(validateTicket(min, max)) {
        return validateTicket(min, max);
    }

    let result = {
        simpleCounter: 0,
        hardCounter: 0,
        winner: ''
    }

    for (let i = Math.abs(min); i <= max; i++) {
        if (i > 999999) {
            break;
        }
        let arr = String(i).split('');

        // add zero before number
        if (i < 100000) {
            let zeroQuantity = 6 - arr.length;
            for (let index = 0; index < zeroQuantity; index++) {
                arr.unshift('0');
            }
        }

        // find sum and compare left side with right side
        if (arr.slice(0, 3).reduce((sum, current) => +sum + Number(current)) === arr.slice(3, 6).reduce((sum, current) => +sum + Number(current))) {
            result.simpleCounter++;
        }

        let typeOfNumber = {
            even: 0,
            odd: 0
        }

        // define and sum even and odd numbers
        arr.forEach(e => {
            Number(e) % 2 === 0 ? typeOfNumber.even += Number(e) : typeOfNumber.odd += Number(e);
        })

        // compare odd with even number
        if (typeOfNumber.even === typeOfNumber.odd) {
            result.hardCounter++;
        }
    }

    // define who is winner
    result.simpleCounter > result.hardCounter ?
        result.winner = 'Simple' : result.simpleCounter < result.hardCounter ?
        result.winner = 'Hard' : result.winner = 'Draw';

    return result;
}

function validateTicket(min, max) {
    if (min === 0 || max === 0) {
        return {
            status: 'failed',
            reason: `number can't be 0`
        };
    }
    if (isNaN(min) || isNaN(max)) {
        return {
            status: 'failed',
            reason: 'You have written a wrong type of parameter'
        };
    }
    if (min > max) {
        return {
            status: 'failed',
            reason: 'Min number is higher than max number'
        };
    }
    if (max > 999999) {
        return {
            status: 'failed',
            reason: 'You have written wrong range of numbers, please write from 0 to 999999'
        };
    }
}

export {
    getLuckyTicket
}