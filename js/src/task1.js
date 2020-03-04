function createChessBoard(height, width, symbol) {

    // check error
    if (validateBoard(height, width, symbol)) {
        return validateBoard(height, width, symbol);
    }

    symbol = String(symbol)[0];
    let result = '';

    for (let i = 0; i <= Math.abs(height); i++) {
        let signOnTheBoard = i % 2 === 0 ? ' ' : symbol;
        for (let j = 0; j < Math.abs(width); j++) {
            signOnTheBoard = signOnTheBoard === ' ' ? symbol : ' ';
            result += signOnTheBoard;
        }
        result += '\n';
    }
    return result;
}

function validateBoard(height, width, symbol) {
    if (isNaN(height) || isNaN(width)) {
        return {
            status: 'failed',
            reason: 'You have written wrong type for width or height, please write number'
        }
    }
    if (height === 0 || width === 0 || symbol === 0) {
        return {
            status: 'failed',
            reason: 'Some fields are empty, please fill in all fields'
        }
    }
    if (height < 1 || width < 1 || height > 50 || width > 50) {
        return {
            status: 'failed',
            reason: 'Your range of numbers is wrong, please write number from 1 to 50'
        }
    }
}

export {
    createChessBoard
}