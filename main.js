"use strict";

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         value: prompt('Degrees celsius'),
//     };
//     const kelvin = parseInt(measurement.value, 10) + 273;
//     return kelvin;
// };
// console.log(measureKelvin());

const calcTemp = function (t1, t2) {
    const temp = t1.concat(t2);
    console.log(temp);

    let max = temp[0];
    let min = temp[0];

    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue;

        if (temp[i] > max) max = temp[i];
        if (temp[i] < min) min = temp[i];
    }
    console.log(max + ", " + min);

    return max - min;
};
const newAmp = calcTemp([1, 4, 7, 9], [6, 23, 5, 11]);
console.log(newAmp);


const printForecast = function (x) {
    const arr = [];
    for (let i = 0; i < x.length; i++) {
        if (i === (x.length - 1)) {
            arr.push('... ' + x[i] + 'C in ' + (i + 1) + ' days...');
        }
        else if (i === 0) {
            arr.push('... ' + x[i] + 'C in ' + (i + 1) + ' day');
        }
        else {
            arr.push('... ' + x[i] + 'C in ' + (i + 1) + ' days');

        }
    }
    return arr.join(" ");
};
const a = printForecast([1, 4, 7, 9]);
console.log(a);