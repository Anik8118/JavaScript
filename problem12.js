/*
Problem 13:
Write a function called "findPrimeNumbers" that takes an array of positive integers as input and returns a 
new array containing only the prime numbers from the original array.
For example:
Input: [2, 3, 4, 5, 6, 7, 8, 9, 10]
Output: [2, 3, 5, 7]

*/
function findPrimeNumbers(arr) {
    let newArr = [];
    for (let ele of arr) {
        if (isPrime(ele)) {
            newArr.push(ele);
        }
    }
    return newArr;
}

function isPrime(x) {
    if (x <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(findPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));


