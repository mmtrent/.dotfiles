const sumAll = function(sumA, sumB) {
    let sumC;
    if (sumA < 0 || sumB < 0 || typeof sumA === 'string' || typeof sumB === 'string' || parseInt(sumA) !== sumA || parseInt(sumB) !== sumB) {
        return 'ERROR';
    }

    if (sumA > sumB) {
        sumC = sumB;
        for (let i = sumB; i <= sumA; i++) {
            let lastNum = i;
            sumC = sumC + i;
            lastNum = sumC;
        }
    } else if (sumB > sumA){
        sumC = sumA;

        for (let i = sumA; i < (sumB + 1); i++) {
            let lastNum = i;
            sumC = sumC + i;
            lastNum = sumC;
        }
    }

    return (sumC - 1);
};

// Do not edit below this line
module.exports = sumAll;
