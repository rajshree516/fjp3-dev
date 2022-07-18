// normal function =---


//  function sayHi(){
//      console.log('function said hi ')
//  } // function declaration 
//  sayHi()  //function invokation  


// parameters in function =-----
 
    // function add(a,b){
    //     console.log('add is',a+b)
    // }
    // add(2,3)

    // function add(a,b){
    //     return a+b
    // }
    // console.log(add(2,3))

    // function add(a,b){
    //     return a+b
    // }
    // let adds=(add(2,3))
    // console.log(adds)

// function as first class citizens

    //(  ===js variable or function koi diff nh krhti
    // let sayHi=function() // anonymous function 
    //{
    //     console.log('hii')
    // } // function expression 
    // sayHi()

//IIFE(immediately invoked function expression )

    let add= (function (a,b){
        return a+b
    })(10,20)
    console.log(add)







