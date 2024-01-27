//For-in on object
const myObject={
    JS : "Javascript",
    CPP : "C++",
    Py : "Python",
    Sol : "Solidity"
}
for(const key in myObject){
    console.log(myObject[key]);
    console.log(`${key} is shortcut for ${myObject[key]}`);

}

//For-in on Array
const programming=["js","cpp","java","sol"]
for(const key in programming){
    // console.log(key);
    console.log(programming[key]);
}

 //Maps = This will not print anything using for in loop
 const maps= new Map()
 maps.set('In', 'India')
 maps.set('USA', 'United States of America')
 maps.set('Fr', 'France')
 
 for(const i in maps){
    console.log(i)
 }
