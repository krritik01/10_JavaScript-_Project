// for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        // console.log("5 is best number");
    }
    // console.log(element)
}

 //print table
for(let i=1;i<=10;i++){
    const table=i*2;
    // console.log("2 *",i,"=",table)
}

for (let i=0;i<=10;i++){
    // console.log(`Outer loop value: ${i}`)
    for(let j=0;j<=10;j++){
        // console.log(`Inner loop value ${j} and inner loop value is also here which is ${i}`)
        // console.log(i + '*' + j + '=' + i*j)
    }
}

//Loops in Array
let myArr=["Harry", "Hitesh", "Babbar", "Striver"]
// console.log(myArr.length)
for(let i=0;i<myArr.length;i++){
    const element =myArr[i]
    // console.log(element)
}

// break and continue
console.log("This is how break works")
for(let i=1;i<=10;i++){
    if(i==5){
        console.log(`Detected ${i}`)
        break
    }
    console.log(`Value of i is ${i}`)
}

console.log("This is how continue works")
for(let i=1;i<=10;i++){
    if(i==5){
        console.log(`Detected ${i}`)
        continue
    }
    console.log(`Value of i is ${i}`)
}




