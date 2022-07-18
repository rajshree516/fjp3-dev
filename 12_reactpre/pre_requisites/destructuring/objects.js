let obj={
    name:"abcd",
    add:{
        state:{
            name1:"cityname",
            pin:"112"
        }
    }
}

// let name=obj.name;
// console.log(name)

// let city=obj.add.state.name;
// console.log(city)


//destructuring-->

let {name} = obj
console.log(name)

let {add : {state :{name1}}} = obj
console.log(name1)