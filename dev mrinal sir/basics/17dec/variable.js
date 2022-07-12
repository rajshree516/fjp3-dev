// var a; // variable will be initialized with undefined
// console.log(a)

// var a=2;
// console.log(a) // logs 2 in the terminal 
// var a='I m string ';
// console.log(a) 
// var a=true 
// console.log(a)

// here we are re declaring these var a -- which is not a good thing 
// js is a dynamically typed language (data type is not specified)

// var a=2;
// console.log(a) // logs 2 in the terminal 
// var a='I m string ';
// console.log(a) 
// var a=true 
// console.log(a)
// a=null
// console.log(a)

// var has problems ---
// 1. redeclarartion 
// overcome od redeclaration -------- 

// let a=2;
// console.log(a) // logs 2 in the terminal 
//  a='I m string ';
// console.log(a) 
//  a=true 
// console.log(a)
// // here we reasssign these 

// for loop -- prime num
// var flag=true
// var num=13
// for(var i=2;i*i<=num;i++){
//     if(num%i==0){
//         flag =false
//         break;
//     }
// }
// if(flag==true){
//     console.log('number is prime')
// }
// else
// console.log('num is not prime')

//2. var-scoping(2nd problem )

// if(10%2==0){
//     var a=2 // var keyword ois function scoped
//     console.log(a)
// }
// console.log(a) 

// if(10%2==0){
//         let a=2 // var keyword ois function scoped
//         console.log(a)
//     }
//     // console.log(a) 

////const///
// const a=2 // cant be reassign as well as redeclared 
// console.log(a)
// const a=4 // redeclaration is not allowed
// a=9 // reassignment is not allowed


