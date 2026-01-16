import { wrap } from "yargs";

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {

    let reversed = "";
    for(let c = str.length - 1; c >= 0; c--) {
        reversed += str[c];
    }

    return reversed;
}

const calculator = {
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    divide(x, y) {
        return x / y;
    },
    multiply(x , y) {
        return x * y;
    }
}

function caesarCipher(str, key) {

    let ciphered = "";
    key = key % 26;

    for (let c = 0; c < str.length; c++) {
        let code = str.charCodeAt(c);

        if (code >= 97 && code <= 122) {
            ciphered += String.fromCharCode(wrapping(code + key, 97, 122));

        } else if (code >= 65 && code <= 90) {
            ciphered += String.fromCharCode(wrapping(code + key, 65, 90));
        } else {
            ciphered += str[c];
        }
    }

    return ciphered;
}

function wrapping(value, min, max) {
    const range = max - min + 1;
    return ((value - min) % range + range) % range + min;
}

function analyzeArray(arr) {
    if (arr.length === 0) {
        return {average: null, max: null, min: null, length: 0};
    }

    const avg = arr.reduce((t, v) => t + v) / arr.length;

    const max = arr.reduce((t, v) => v > t ? v : t, arr[0]);

    const min = arr.reduce((t, v) => v < t ? v : t, arr[0]);

    return {
        average: avg,
        max: max,
        min: min,
        length: arr.length,
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };