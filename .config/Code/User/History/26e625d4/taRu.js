const sumAll = function(sumA, sumB) {
    let sumC;
    if (sumA > sumB) {
        for (let i = 0; i <= sumA; i++) {
            sumC = sumA + sumB;
        }
    } else if (sumB > sumA){
        for (let i = 0; i <= sumB; i++) {
            sumC = sumB + sumA;
        }
    }

    return sumC;
};

// Do not edit below this line
module.exports = sumAll;
