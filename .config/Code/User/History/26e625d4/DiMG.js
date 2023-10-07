const sumAll = function(sumA, sumB) {
    let sumC;
    if (sumA > sumB) {
        for (let i = 0; i < sumB; i++) {
            sumC = sumA + sumB;
        }
    }

    return sumC;
};

// Do not edit below this line
module.exports = sumAll;
