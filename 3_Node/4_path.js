const path=require('path')


let ext=path.extname('myDirectory\\f1.txt')
// this extname methodgets the extention name of the file
console.log(ext)


let basename=path.basename("myDirectory\\f1.txt")
console.log(basename)

console.log(__dirname) // path od current diectory
console.log(__filename) //the file you are in 

