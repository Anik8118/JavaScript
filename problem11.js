/*
Problem 11:
Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, 
with one number missing, and returns the missing number.
For example:
Input: [1, 2, 3, 5, 6, 7, 8]
Output: 4

*/
function findMissingNumber(arr){
    let NewArr=0;
    for(i=0;i<arr.length;i++){
        if((arr[i+1]-arr[i])!=1){
            NewArr= (arr[i]+1);
            break;
        }
    }
    return NewArr
}

console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8]));

