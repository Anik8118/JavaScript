//arr all array methods
//map,filter,sort,every,some,reduce

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

                       //Map method

//Get an array of all names
let newArrName=characters.map((ele) => ele.name);
console.log(newArrName);

//Get an array of all heights
let newArrHeight=characters.map((ele) => ele.height);
console.log(newArrHeight);

//Get an array of objects with just name and height properties
let NameAndObject=characters.map((ele) =>{
    return {
        name:ele.name,
        height:ele.height
    }
})
console.log(NameAndObject);


//Get an array of all first names
let FirstName=characters.map((ele) =>{
    return ele.name.split(" ")[0];
});
console.log(FirstName);


                                   //Filter Method


//Get characters with mass greater than 100
let MassEle=characters.filter((ele) =>{
    if(ele.mass>100){
        return ele.mass;
    }
});
console.log(MassEle);

//Get characters with height less than 200
let HeightEle=characters.filter((ele) =>{
    return ele.height<200;
});
console.log(HeightEle);

//Get all male characters
let MaleEle=characters.filter((ele) =>{
    return ele.gender=="male";

});
console.log(MaleEle);

//Get all female characters
let FemaleEle=characters.filter((ele) =>{
    return ele.gender="female";
});
console.log(FemaleEle);



                   //Every Method

//Does every character have blue eyes?
let AllBlueEyes=characters.every((ele) =>{
    return ele.eye_color=="blue";
});
console.log(AllBlueEyes);

//Does every character have mass more than 40?
let MassMoreThan40=characters.every((ele) =>{
    return ele.mass>40;
});
console.log(MassMoreThan40);

//Is every character shorter than 200?
let HeightELE=characters.every((ele) =>{
    return ele.height<200;
})
console.log(HeightELE);

//Is every character male?
let CheckGender=characters.every((ele) =>{
    return ele.gender=="male";
})
console.log(CheckGender);



                  //Some Method


//Is there at least one male character?
let AtleastOneMale=characters.some((ele) =>{
    return ele.gender=='male';
});
console.log(AtleastOneMale);

//Is there at least one character with blue eyes?
let BlueEyes=characters.some((ele) =>{
    return ele.eye_color=="blue";
});
console.log(BlueEyes);

//Is there at least one character taller than 200?
let ImpHeight=characters.some((ele) =>{
    return ele.height>200;
});
console.log(ImpHeight);

//Is there at least one character that has mass less than 50?
let ImpMass=characters.some((ele) =>{
    return ele.mass<50;
});
console.log(ImpMass);


                        //reduce


//Get the total mass of all characters
let TotalMass=characters.reduce((acc,ele) =>{
    return (acc+=Number(ele.mass));
},0);
console.log(TotalMass);

//Get the total height of all characters
let TotalHeight=characters.reduce((acc,ele) =>{
    return (acc+=Number(ele.height));
},0);
console.log(TotalHeight);

//Get the total number of characters in all the character names
let TotalChaacter=characters.reduce((acc,ele) =>{
    return (acc+=ele.name.split(' ').join('').length);
},0);
console.log(TotalChaacter);

//Get the total number of characters by eye color (hint. a map of eye color to count)
let TotalChaacterByEyeColor=characters.reduce((acc,ele) =>{
    if(acc[ele.eye_color]){
        acc[ele.eye_color]++;
    }else{
        acc[ele.eye_color]=1;
    }
    return acc;
},{})
console.log(TotalChaacterByEyeColor);


//Exersise
let str="Hello World";
c=str.split('').reduce((acc,ele) =>{
    if(ele!=' '){
        if(acc[ele]){
            acc[ele]++;
        }else{
            acc[ele]=1;
        }
    }
    return acc;
},{});
console.log(c);
