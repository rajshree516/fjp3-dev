// 
const helpModule = require("./commands/help");
const organizeModule = require("./commands/organize");
const treeModule = require("./commands/tree");
let input=process.argv.slice(2)
// console.log(i)
let command =inputArr[0]

switch(command){
    case "tree":
        console.log("tree implemented ");
        break;
    case "organize":
        // console.log("organiznode FO.jse implemented ");
        organizeFn(inputArr[1])
        break;
    case "help":
        helpFn()
        break;
    default:
        console.log("please enter a valid command ")
        break;
}

function helpFn(){
    console.log("list of command - 1. Tree Command - node FO.js tree <dirname>  2. Organise Command - node FO.js organize <dirname> 3. Help Command - node FO.js help " )
}

function organizeFn(dirpath){
    console.log(dirpath)
}




