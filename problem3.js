/*
Problem 3:
Write a function called `reverseString` that takes a string 
as input and returns the reverse of that string. Your function 
should not use the built-in `reverse()` method.
Example Input/Output:
- reverseString('hello') should return 'olleh'
- reverseString('racecar') should return 'racecar'
- reverseString('12345') should return '54321'

*/

function reverseString(str){
    let str2=' ';
    for(let i=str.length-1;i>=0;i--){
        str2+=str[i];
    }
    return str2;
}

console.log(reverseString('hello'));
console.log(reverseString('racecar'));
console.log(reverseString('12345'));