/*
Problem 10:
Given an array exists that has integers, write a function called "getPositiveNumbers" that takes the entire 
array as input and returns a new array containing only the positive numbers from the original array.
Sample Input : [2, -5, 10, -3, 8, -1, 0, 7]
Sample Output: [2, 10, 8, 7]
*/

function getPositiveNumbers(arr){
    let NewArr=[];
    arr.forEach(element => {
        if(element>0){
            NewArr.push(element);
        }
    });
    return NewArr;
}

console.log(getPositiveNumbers([2, -5, 10, -3, 8, -1, 0, 7]));



