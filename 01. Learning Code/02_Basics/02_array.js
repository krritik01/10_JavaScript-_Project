const marvel_heros=["Rune King Thor", "Ghost Rider", "One Above All"]
// console.log(marvel_heros)

const dc_heros=["Superman Prime", "Doctor Manhattan", " The Presence" ]

// marvel_heros.push(dc_heros)  //array can take any type of entry data
// console.log(marvel_heros)//this is not the correct way to merge data
// console.log(marvel_heros[3][1])

// Another method to merge is concat but we have to put this in a new variable
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//Another easy method to do this is to use spread method to merge this
const allNewHero = [...marvel_heros, ...dc_heros]
// console.log(allHeros)
// The spread syntax, represented by three dots (...), is a powerful tool in JavaScript that allows you to easily "unpack" iterables like arrays or strings. It can be used in various contexts, including function calls, array literals, and object literals.


const anothe_array=[1,2,3,[3,4,6],7,[6,7,[4,5]]]
const real_another_array= anothe_array.flat(Infinity)     //The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array)

console.log(Array.isArray("Ritik"))   //identify is this array or not
console.log(Array.from("Ritik"))  // An array-like object to convert to an array. Convert it into array
console.log(Array.from({name:"Ritik"})) //it gives empty array because it directly not convert it into array 

let score1=100;
let score2=200;
let score3=300;
//convert it into array using Array.of
console.log(Array.of(score1, score2, score3))

//The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

//The Array.isArray() static method determines whether the passed value is an Array.

//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from([1, 2, 3], (x) => x + x));