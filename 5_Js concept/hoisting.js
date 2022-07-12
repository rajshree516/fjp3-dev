console.log(a) // undefined with var 
//{} initialization error with let and const 
// {}temporal dead zone 
greet()
var a=2
function greet(){
    console.log("hello")
}