const sumAll = function(sumA, sumB) {
    let sumC;
    if (sumA > sumB) {
        for (let i = 0; i <= sumA; i++) {
            sumC = sumA + sumB;
        }
    } else if (sumB > sumA){
        sumC = sumA;

        for (let i = sumA; i < (sumB + 1); i++) {

            sumC = sumC + i;
        }
    }

    return sumC;
};

// Do not edit below this line
module.exports = sumAll;