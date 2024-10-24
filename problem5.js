/*
Problem 5:
Write a function `mergeArrays` that takes in two arrays 
of integers and returns a new array that contains all the 
elements from both arrays, sorted in ascending order.
For example, if the two input arrays are:
[1, 3, 5, 7, 9]
[2, 4, 6, 8, 10]
The function should return the following array:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Example Input/Output:
- mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- mergeArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

*/ 

function mergeArrays(arr1,arr2){
    let NewArr=[];
    let i=j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]){
            NewArr.push(arr2[j]);
            j++;
        }else{
            NewArr.push(arr1[i]);
            i++;
        }
    }
    while(i<arr1.length){
        NewArr.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        NewArr.push(arr2[j]);
        j++;
    }
    return NewArr;
}

console.log(mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
console.log(mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]));
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));


