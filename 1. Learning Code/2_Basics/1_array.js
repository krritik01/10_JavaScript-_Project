// //--------------------Array--------------------

// // The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// // JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

const myArr= [0,1,2,3,4,5]

const myHero =["Shaktiman", "Krissh", "Myself"]

// const myArr2 =  new Array(1,2,3,4)
// console.log(myArr[0]);

// //Array Method

// myArr.push(6)  //push() adding value we use push method
// myArr.push(7)  
// console.log(myArr)

// myArr.pop()  //pop() removes or delete the last value in the array
// console.log(myArr)

// myArr.unshift(0)  //The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
// myArr.unshift(8)
// console.log(myArr);

// myArr.shift()  //The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
// console.log(myArr)


// console.log(myArr.includes(2));
// console.log(myArr.indexOf(3));


const newArr = myArr.join()     //The Array join() method creates a new string by combining all array elements, using commas or a specified separator.

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr) //make that array into string


// slice and splice


//Slice --> The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.


//Splice --> The splice method used to change the contents of an array by removing or replacing existing elements and/or adding new elements at a specified index. It can remove elements, insert elements, or perform both actions simultaneously, modifying the original array.

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)  //slice not modify the array and return the new portion of array from start to end(end not included)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)  //splice modify the array and return the new portion of array from start to end(end is included)
console.log("C ", myArr)
console.log(myn2)









