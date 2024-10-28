/*let person={
    name:'Fairuz',
    age:23,
    address:'Dhaka',
    sayHello:function(){
        console.log('Hello Fairuz');
    }
};
//console.log(person.address);
//console.log(person['name']);
//console.log(person['age']);
person.interest=['java','javascript','c#'];
console.log(person);
*/

/*let mesure={
    USDtoBDT(v){
        return v*120;
    }
};


console.log(mesure.USDtoBDT(5));
mesure.name=['Fairuz'];
console.log(mesure);*/

/*let person={
    name:'Fairuz',
    age:23,
    addr:{
        city:'Dhaka',
        zip:1200,
        visible(){
            console.log(this);
        },
    },
    arr:[1,2,3,4,5],
    showarr(){
        this.arr.forEach((ele) =>{
            console.log(ele,this.addr.city)
        });
    },
}
/*for(ele in person){
    console.log(person[addr[ele]]);
    
}*/
/*for(ele in person.addr){
    console.log(person.addr[ele]);
    
}*/

//person.understate='s';
//console.log(person);
/*let a=[1,2,3,4,5];
a.forEach((ele)=>{
    console.log(ele)
});*/
//person.showarr();
//person.addr.visible();

/*function repleceToWord(text,word,replace){
    let arr=text.split(' ');
    let newArr=[];
    arr.forEach((ele)=>{
        if(ele==word){
            newArr.push(replace);
        }else{
            newArr.push(ele);
        }
    });
    return newArr.join(' ');
}

let str='Hello World';
console.log(repleceToWord(str,'World','Jupeter'));*/

/*Factory Function
function createPerson(name,age,arr){
    return {
        name,
        age,
        sayHello(){
            console.log('Hello');
        },
        arr:arr,
    }
}
let list=[1,2,3,4];
let p1=createPerson('Rajbir',23,list);
let p2=createPerson('Fahim',27,list);
p2.addr='Manikgonj';
console.log(p2);
console.log(p1);*/

/*constructor function

function Createperson(name,age){
    this.name=name;
    this.age=age;
    this.SayHello=function(){
        console.log('Hello');
        
    }
}

let p1=new Createperson('Saurav',29);
p1.addr='Pirojpur';
console.log(p1);*/

/*class based object

class person{
    constructor(name,age,message){
        this.name=name;
        this.age=age;
        () => {
            console.log(message);
            
        }
    }
}

p1=new person('Anik',23,'Blank');
console.log(p1);*/

//rest operator
function func(...n){
    //let c=0;
    /*n.forEach((ele) =>{
        c+=ele;
    });
    return c;*/

    return n;
}

let arr=[[1,2,3,4,5,6]];
console.log(func(...arr));





