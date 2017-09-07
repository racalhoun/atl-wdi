//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.
function lengths (words) {
 let newArray = [];
 for (let i = 0; i < words.length; i++) {
     words.push(newArray[i]);
 }
}

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.
function transmogrifier(a,b,c) {
    return (a * b) ** c;;
}


// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.// your code here
const wordReverse = (sentence) => {
    const split = sentence.split("");
    const reverse = split.reverse();
    return reversed.join("");
}   