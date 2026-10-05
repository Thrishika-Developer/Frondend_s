//object - a collection of data stored as a key : value

let employe= {
    name : "thrishika",
    age : 29,
    course :" Java full stack",
    skilss : ['html','css','bootstrap','sql','react','js']
}
// console.log(employe)
// console.log(typeof(employe))

// //Accessing object Properties
// //Dot Notation-object Name .properties
// console.log(employe.name)
// console.log(employe.age)
// //Bracket Notation - object Name['properties']
// console.log(employe["name"])
// console.log(employe["age"])

// //Adding prpoperties
// employe.emai="thrishikasinger999@gmail.com"
// console.log(employe)

// //Update Properties
// employe.name="thrishika N S"
// console.log(employe)

// //Deleting properties
// // delete objectName .propertyName
// delete employe.age
// console.log(employe)

// //Object Methods
// // keys - returns all the key values
// console.log(Object.keys(employe))

//Values - all the values return 
// console.log(Object.values(employe))

// //entries -key value pairs
// console.log(Object.entries(employe))

// //loops with object
// // for...in loop

// for(let key in employe){
//     console.log(key,employe[key])
// }

//Object.keys()+for loop
// let key = Object.keys(employe)
// console.log(key)
// for(let i=0;i<key.length;i++){
//     console.log(key[i])
// }


// for....of
// Object.values()
// for(let value of Object.values(employe)){
//     console.log(value)
// }

//Object.entries
for(let [key,value] of Object.entries(employe)){
    console.log(key,value)
}