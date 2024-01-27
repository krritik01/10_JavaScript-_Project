//Array specific loop
 const arr=[1,2,3,4,5,6,7]
 for (const i of arr) {
    // console.log(i);
 }

 const string = "Hello World"
 for(const str of string){
    // if(str===" ") //we use this if we don't want to print space
    // continue
    // console.log(`Each char is ${str}`)
 }


 //Maps
 const maps= new Map()
 maps.set('In', 'India')
 maps.set('USA', 'United States of America')
 maps.set('Fr', 'France')

 console.log(maps)
 //Loop on the map
 for(const key  of maps){ //this will print it in array and if we dont want it to print it in array then we use [key, value] like this
    console.log(key)
 }

 for(const [key, value]  of maps){ 
    // console.log(key, ':-', value)
 }

 //for-of loop on object but it will not iterate because it will not work on Object

 const myObject={
    'game1' : 'NFS',
    'game1' : 'COD',
 }
 for (const [key,value] of myObject) {
    console.log(key, ":-", value)
 }