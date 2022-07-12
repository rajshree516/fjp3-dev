// File System Module

//***files*** //


// 1. we will be reading , writing,updating and deleting files

const fs=require('fs')

const path=require('path')
// let content =fs.readFileSync('f1.txt')
// console.log("this is text data"+ content)

// // writing --
// fs.writeFileSync('f2.txt', content);

// // append a file
// fs.appendFileSync('f2.txt','this is new data')


// //deleting -- unlinksync
// fs.unlinkSync('f2.txt')


// *****DIRECTORIES******

// creating a directory --
    // // mkdirSync method used to create 
    // fs.mkdirSync('myDirectory');
    // console.log('directory createddd')

    //deleting ---
    //rmdir 
    // fs.rmdirSync('myDirectory');
    // console.log('deleted');

     // to check whether a file or directory exixsts or not
     //existsSync
     // this return true or false 
    // let doesExists= fs.existsSync('myDirectory') 
    // // console.log(doesExists)  

    // let statsOfDirectory=fs.lstatSync('myDirectory')
    // // console.log(statsOfDirectory)

    // console.log('isFile?',statsOfDirectory.isFile())
    // console.log('isDirectory?',statsOfDirectory.isDirectory())

    //read directory ---
        //readdirSync
        let folderpath= 'C:\\Users\\rajshree\\OneDrive\\Desktop\\fjp3 dev\\dev mrinal sir\\NodeJs\\myDirectory'
        let foldercontent=fs.readdirSync(folderpath)
        console.log("directory content =="+ foldercontent)
    
    //copying files 
    //src file , destination path
    let srcFilePath="C:\\Users\\rajshree\\OneDrive\\Desktop\\fjp3 dev\\dev mrinal sir\\NodeJs\\myDirectory\\f1.txt"
   
    let destinationPath="C:\\Users\\rajshree\\OneDrive\\Desktop\\fjp3 dev\\dev mrinal sir\\NodeJs\\myDirectory2\\"
    
    let toBeCopiedFilePath=path.basename(srcFilePath)
    console.log(toBeCopiedFilePath)

    let destPath=path.join(destinationPath,toBeCopiedFilePath)
    // console.log(destPath)

    fs.copyFileSync(srcFilePath , destPath)
    console.log("file copies")

