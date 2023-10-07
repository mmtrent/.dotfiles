const sumAll = function(sumA, sumB) {
    let sumC;
    if (sumA > sumB) {
        for (let i = 0; i <= sumA; i++) {
            sumC = sumA + sumB;
        }
    } else if (sumB > sumA){
        for (let i = sumA; i <= sumB; i++) {
            let j = i;
            let k = i + j;
        }
    }

    return sumC;
};

// Do not edit below this line
module.exports = sumAll;
