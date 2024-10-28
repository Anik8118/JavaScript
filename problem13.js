/*Problem 12:
Write a function called "getMaxProduct" that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any two distinct elements from the array.
Sample Input: [2, 3, 5, 6, 7]
Sample Output: 42 (obtained by multiplying 6 and 7)*/

function getMaxProduct(arr){
    let max1=arr[0];
    let max2=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1; // Update max2 before changing max1
            max1 = arr[i];
        } else if (arr[i] > max2 && arr[i] != max1) {
            max2 = arr[i];
        }
    }
    return max1*max2;
}
let x=[2,5,6,1];
console.log(getMaxProduct(x));

