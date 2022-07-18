let obj ={
    name:'rajshree',
    country:'india',
    add:{
        city : {
            name1:'nbh',
            pin:'312601'
        }
    }
}
// let obj2={...obj,add:{...obj.add}}


let obj2=JSON.parse(JSON.stringify(obj));

obj.add.name='abcd'
console.log(obj)
console.log(obj2)