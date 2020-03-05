function sortTriangles(list) {
    let result = []; //only names
    let arr = [];

    for (let i = 0; i < list.length; i++) {

        // find all values for triangle
        let first = Math.abs(list[i][Object.keys(list[i])[1]]);
        let second = Math.abs(list[i][Object.keys(list[i])[2]]);
        let third = Math.abs(list[i][Object.keys(list[i])[3]]);

        // errors
        if (validateTriangles(list, first, second, third, i)) {
            return validateTriangles(list, first, second, third, i);
        }

        // calculating
        let p = (first + second + third) / 2;
        arr.push({
            s: Math.sqrt(p * (p - first) * (p - second) * (p - third)),
            veh: list[i][Object.keys(list[i])[0]]
        });
    }

    arr.sort((a, b) => b.s - a.s);
    arr.forEach(triangle => result.push(triangle.veh));

    return result;
}

function validateTriangles(list, first, second, third, i) {
    let listOfNames = [];
    list.forEach((e, i) => listOfNames.push(e.veh));
    let setUniqueNames = new Set(listOfNames);
    let keyNames = '';

    for(let key in list[i]) {
        if(key !== 'veh'){
            keyNames += key.toUpperCase();
        }
    }

    if (first === 0 || second === 0 || third === 0 || list[i].veh === 0) {
        return {
            status: 'failed',
            reason: 'Some fields are empty'
        };
    };
    if (typeof list[i].veh !== 'string') {
        return {
            status: 'failed',
            reason: 'Wrong type of data'
        };
    };
    if (list[i].veh.length !== 3) {
        return {
            status: 'failed',
            reason: 'Vehicle name length must be 3'
        };
    };
    if (isNaN(first) || isNaN(second) || isNaN(third)) {
        return {
            status: 'failed',
            reason: 'You have written wrong type of data, please write number'
        };
    };
    if (setUniqueNames.size !== listOfNames.length) {
        return {
            status: 'failed',
            reason: 'Some name of triangle is not unique'
        };
    };
    if(list[i].veh !== keyNames) {
        return {
            status: 'failed',
            reason: 'Wrong key parameters'
        };
    };
};

export {
    sortTriangles
}
