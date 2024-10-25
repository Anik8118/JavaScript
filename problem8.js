/*
Problem 8:
You are giving a book stall at Dhaka International book fair and need to create a list of books to be featured 
at the event.
Task:
Write a function `createBookList` that takes in three parameters: `bookTitles`, an array of book titles, 
`authorNames`, an array of corresponding author names and ‘number of copies available’ , an array of corresponding 
copies available for the book.
Write a function ‘Add Copies’ that takes two parameters : `bookTitle` and the number of copies you are adding 
to that book. The function should add copies to that particular book.
Write a function ‘Sell Book’ that takes two parameters : `bookTitle` and the number of copies you are selling 
of that book. The function should deduct copies of that particular book.
Write a function ‘GetDetails’ that takes no parameters and returns all the titles of the book in the bookTitles 
array ,the author names of the book in the `authorNames’ array and the number of copies available of the corresponding books, which should be updated after adding or selling a book.
.
Sample Input:
createBookList(‘Bohubrihi’ , ‘Humayun Ahmed’ , 10)
Add Copies(‘Bohubrihi’ , 5)
Updates number of copies available of Bohubrihi to 15)
‘Sell Book’(‘Bohubrihi’ , 3)
 Updates number of copies available of Bohubrihi to 12)
‘GetDetails’()
  Returns (“Bohubrihi” by “Humayun Ahmed” number of copies available 12)
Hint :Make 3 arrays of the same length.

*/

let Title=[];
let Author=[];
let Copies=[];
function createBookList(title,author,copies){

    Title.push(title);
    Author.push(author);
    Copies.push(copies);

}
function add_copies(bookTitle,NumberofCopies){
    const index = Title.indexOf(bookTitle);
    if(index!=-1){
        Copies[index]+=NumberofCopies;
        console.log("Update Number of Copies Available of "+bookTitle+" to "+Copies[index]);
    }
}
function sellBook(bookTitle,CopieSold){
    const index = Title.indexOf(bookTitle);
    if(index!=-1){
        if(Copies[index]>CopieSold){
            Copies[index]-=CopieSold;
            console.log("Update Number of Copies Available of "+bookTitle+" to "+Copies[index]);
        }
    }
}
function GetDetails(){
    NewArr=[];
    for(ele in Title,Author,Copies){
        NewArr.push(...Title,...Author,...Copies);
    }
    console.log(NewArr);
} 

createBookList('Bohubrihi' , 'Humayun Ahmed' , 10);
add_copies('Bohubrihi' , 5);
sellBook('Bohubrihi' , 3);
GetDetails();