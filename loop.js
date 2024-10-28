/*for(let i=1;i<10;i+=2){
    console.log(i);
    
}
let i=1;
while(i<10){
    console.log(i);
    i+=2;
    
}
let i=1;
do{
    console.log(i); 48ty][]
    i+=2;
}while(i<100)

let Name = "Fairuz Tasnim";
for(letter of Name){
    console.log(letter);
    
}

arr=[1,2,3,4,5,6,7,8,9];
arr.forEach((ele) => {
    console.log(ele);
    

});*/

arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
/*for(i=0;i<arr.length;i++){

    for(j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
        
    }
}*/

arr.forEach(element => {
    console.log(element);
    element.forEach((ele)=>{
        console.log(ele);
        
    });
    
});
