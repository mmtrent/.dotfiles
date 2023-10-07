const sumAll = function(sumA, sumB) {
    let sumC;
    if (sumA > sumB) {
        for (let i = 0; i <= sumA; i++) {
            sumC = sumA + sumB;
        }
    } else if (sumB > sumA){
        sumC = sumA;

        for (let i = sumA; i < (sumB + 1); i++) {
            let lastSum = i;
            sumC = sumC + i;
            lastNum = sumC;
        }
    }

    return (sumC - 1);
};

// Do not edit below this line
module.exports = sumAll;
