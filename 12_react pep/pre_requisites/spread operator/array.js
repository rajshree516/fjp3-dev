// let arr=[1,2,3];
// let arr2=arr;
// arr2.push(4);
// console.log(arr);
// console.log(arr2);

//to oversome this -- spread operator[...]

let arr=[1,2,3];
let arr2=[...arr];
arr2.push(4,5);
arr.push(7);
console.log(arr);
console.log(arr2);