/* Closure - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.                                                                                      
or,

function that return another function and the return function use the variable of the parent function
*/
function counter() {
  var count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
var fun = counter();
fun();

//Another example
function abcd() {
  let a = 10;
  return function () {
    console.log(a);
  };
}
const func = abcd();
func();

//Another example
function hello() {
  var a = 12;
  return setTimeout(() => {
    console.log(a);
  }, 2000);
}
var funn = hello();
