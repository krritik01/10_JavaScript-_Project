//For each loop - we use callback function in this

const coding = ["js", "cpp", "solidity","rust","java","swift"]
coding.forEach( function (item) { //here the function is callback function
    // console.log(item)
} )

//We can also use arrow function here
const language = ["js", "cpp", "solidity","rust","java","swift"]
coding.forEach( (item)=>{ //here the function is callback function
    // console.log(item)
} )



function printMe(item){
    console.log(item)
}
// coding.forEach(printMe) //Here we are giving reference it will print automatically

coding.forEach( (item, index, arr)=>{
    // console.log(item, index, arr)
})


//iteration on Object using foreach
const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Solidity",
        languageFileName:"sol"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
    // console.log(item.languageFileName)
})