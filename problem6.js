/*
Problem 6:
Write a function called `findShortestWord` that takes in a
 string as a parameter and returns the shortest word in the 
 string. If there are two or more words that are the same length
  and shortest, return the first word from the string with that length. Ignore punctuation and assume the 
  string will not be empty. Words may also contain numbers.
For example, if the input string is "The quick brown fox jumps over the lazy dog", the function 
should return "The".
Example Input/Output:
- findShortestWord("The quick brown fox jumps over the lazy dog") should return "The"
- findShortestWord("Hello world") should return "world"
- findShortestWord("Today is Monday") should return "is"

*/

function findShortestWord(str){
    let arr=str.split(' ');
    let NewArr=arr[0];
    let i=1;
    while(i<arr.length){
        if(arr[i].length<NewArr.length){
            NewArr=arr[i];
        }
        i++;
    }
    return NewArr;
}

console.log(findShortestWord("The quick brown fox jumps over the lazy dog"));
console.log(findShortestWord("Hello world"));
console.log(findShortestWord("Today is Monday"));

