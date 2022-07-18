// it is node module used to create sub process within a script 
// you can perform different tasks with your scripts

const cp=require('child_process')
// console.log('trying to open calculator ');
// cp.execSync('calc')
// console.log('calculator open')


// console.log('trying to vs code ');
// cp.execSync('code')



// console.log('trying to vs code ');
// cp.execSync('start chrome pepcoding')

let output=cp.execSync('node test.js')
console.log('output ==' + output  )