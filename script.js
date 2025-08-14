export function capitalize(string) {
    firstLetter = string.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    string = string.replace(string.charAt(0), firstLetter);
    return string;
}

export function reverse(string) {
    let reverseString = "";

    for(let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString;
}

export const calculator = {
    add(a, b) {
        return a + b;
    }, 
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
}

export function caesarCipher(string, num) {
    const lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let cipherString = "";
    let index = 0;
    let newIndex = 0;

    for (let i = 0; i < string.length; i++) {
        if (lowerAlpha.includes(string[i])) {
            index = lowerAlpha.indexOf(string[i]);
            let newIndex = index + num;
            if(newIndex > 25) {
                newIndex -= 26;
            };
            cipherString += lowerAlpha[newIndex];
        } else if (upperAlpha.includes(string[i])) {
            index = upperAlpha.indexOf(string[i]);
            let newIndex = index + num;
            if(newIndex > 25) {
                newIndex -= 26;
            };
            cipherString += upperAlpha[newIndex];
        } else {
            cipherString += string[i];
        }
    }

    return cipherString;
}

export function analyzeArray(array) {    
    let total = 0;
    let min = 1000000;
    let max = 0;
    let length = array.length;
    
    for(let i = 0; i < array.length; i++) {
        total += array[i];
        if(array[i] < min) {
            min = array[i];
        };
        if(array[i] > max) {
            max = array[i];
        }
    }

    let ave = total / length;
    const result = {ave: ave, min: min, max: max, length: length};
    return result;
}
