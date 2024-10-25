/*
Problem 9:
Write a Javascript Program that takes String as a parameter and checks if the parameters are number or text. 
If the parameters are numbers then it will return a summation of the numbers. If the parameters are not numbers 
then it will generate a text by concatenating the strings.
Sample Input:
parseString(“21” , “24’ , “40”)
parseString(“Hello” , “Alpha”)
parseString(“Summer” , “2022”)
Sample Output:
85
Hello Alpha
Summer 2022

*/

function parseString(...arr){
    let num=[];
    let str=[];
    arr.forEach((ele)=>{
        if(!isNaN(arr)){
            numbers.push(Number(ele));
        }else{
            str.push(ele);
        }
    });
    if (num.length ==arr.length) {
        return num.reduce((acc, n) => acc + n, 0);
    } else {
        return arr.join(' ');
    }
}
console.log(parseString("21" , "24" , "40"));

