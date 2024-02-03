//Immediately Invoked Function Expression (IIFE)

//Pollution of the global scope causes problems many times, so we use iife to remove that pollution at that declaration on global scope.

(function chai(){
    //this is named iife
    console.log(`DB CONNECTED`);
}) ();

((name)=>{
    //unnamed iife
    console.log(`DB Connected Two ${name}`)
})("ritik");

( function RitikaurJavascript (){
    //This is named iiff
    console.log(`DB connected`)
}) ();


