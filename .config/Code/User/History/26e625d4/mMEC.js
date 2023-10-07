const sumAll = function(sumA, sumB) {
    let sumC;
    if (sumA > sumB) {
        for (let i = 0; i <= sumA; i++) {
            let lastNum = i;
            sumC = sumC + i;
            lastNum = sumC;
        }
    } else if (sumB > sumA){
        sumC = sumA;

        for (let i = sumA; i < (sumB + 1); i++) {
            let lasNum = i;
            sumC = sumC + i;
            lastNum = sumC;
        }
    }

    return (sumC - 1);
};

// Do not edit below this line
module.exports = sumAll;
