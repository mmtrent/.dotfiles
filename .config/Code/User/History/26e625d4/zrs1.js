const sumAll = function(sumA, sumB) {
    if (sumA > sumB) {
        for (let i = 0; i <= sumA; i++) {
            sumC = sumA + sumB;
        }
    } else if (sumB > sumA){
        let sumC = sumA;
        for (let i = sumA; i <= sumB; i++) {

            sumC++;
        }
    }

    return sumC;
};

// Do not edit below this line
module.exports = sumAll;
