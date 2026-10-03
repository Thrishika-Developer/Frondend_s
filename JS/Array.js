// //Array - an array is used to store multiple values in a single variable

// let fruits = ["apple","banana","graphs","mango"]
// console.log(fruits)
// // console.log(typeof(fruits))

// //method - push - add the element at the end
// // fruits.push("green apple")
// // console.log(fruits)
// // console.log(fruits.push("green appplesss"))
// // console.log(fruits)
// //pop -remove the element at the end

// // console.log(fruits.pop("green applesss"))
// // console.log(fruits)

// //unshift - add element at the begin

// // fruits.unshift("papaya")
// // console.log(fruits)
// // console.log(fruits.unshift("kova"))
// // console.log(fruits)

// //shift - remove element at the begin
// // fruits.shift()
// // console.log(fruits)
// // console.log(fruits.shift())

// // //length - returns total length
// // console.log(fruits.length)

// // //indexof()- return index positions
// // console.log(fruits.indexOf("mango"))

// // //includes - check value exists or not
// // console.log(fruits.includes('mango'))

// //reverse - reverse the array
// let numbers =[10,20,230,40,50]
// console.log(numbers.reverse())
// console.log(fruits.reverse())

// //sort - sorting the array
// console.log(fruits.sort())


// //concat - combines of array
// a1 =["puthon","java","sql"]
// a2 = ["1000","2000","3000"]
// console.log(a1.concat(a2))

// //slice() - returns the selected element
// //array.slice(start,end)
// num = [1,2,3,4,56,,6,66]
// console.log(num.slice(4,7))


// //splice - add / remove element 
// //array.splice(index , deletecount , new value)
// number = [1,2,3,4,5,6,7,7,7,8,9,12,34]
// number.splice(2,1)
// console.log(number)

// number.splice(2,6,100,2000)
// console.log(number)

// number.splice(2,0,"ai")
// console.log(number)

// //join - converts array into string format
// string =["a","b","c"]
// console.log(string.join(" - "))
// console.log(string.toString())

// //map()- create new array after operation
// let numbb = [1,2,3,4,5,6,7,8,9,10]
// // let ans =numbb.map(elements=>elements* 10)
// let ans = numbb.filter(elements=>elements%2==0)
// console.log(ans)

// let answer = numbb.reduce((sum,n)=>sum + n,0)
// console.log(answer)

// //filter - returns matching element
// //reduce - returns single value

// //For each -execute function for every element
// let cour = ["pytho","java",'react',"js","boostrap"]
//  cour.forEach(element=> console.log(element))

//  for(let i =0;i<cour.length;i++){
//     console.log(cour[i])
//  }

//  i=0
//  while(i<cour.length){
//     console.log(cour[i])
//     i++
//  }


//  //Interview question
//  //print the array element

//  let array = [1,2,3,4,5,6,7,9,0]
// //  array.forEach(element=>(console.log(element*5)))

// let answ= array.map(element=>element*4)
// console.log(answ)


// //find the sum of the array
// let nume = [2,3,4,5,5]
// let sum = 0
// for(let nume of array){
//     sum+=nume
//     console.log('step -', sum)
// }
// console.log(sum)


// //search number
// let arr=[2,3,4,5,6,7]
// if(arr.includes(3)){
//    console.log("Found")
// }
// else{
//    console.log("Not found")
// }

// //Double number,square root,add 10
// let nums =[2,3,4,56,4]
// // let result= nums.map(values=>values*2)
// // let result = nums.map(val=>val*val)
// let result = nums.map(val=>val+10)
// console.log(result)

// //all the name into upper case
// let strng = ['3irru','kumar','Siva']
// // let res = strng.map(nam=>nam.toUpperCase())
// // let res= strng.map(nam=>nam.length)
// let res=strng.map(nam=>'Mr.'+nam)
// console.log(res)

// //gst calculator

// let nub = [100,200,300,400,5000]
// let rr = nub.map(price=>price+(price*0.18))
// console.log(rr)

// //odd or even number
// let numbersss= [1,2,3,4,56,6]
// // let find = numbersss.map(numb=>numb%2==0 ? 'even' : 'odd')
// let find = numbersss.map(num=>num**3)
// console.log(find)

// //even num
// let n =[1,2,3,4,5,6,7]
// let and = n.filter(num=>num%2==0)
// console.log(and)


let nam = ['arun','sivakumar','ratheesh','vibu','rijovishal']
// let rest= nam.filter(names=>names.length>=5)
let rest = nam.filter(names=>names.startsWith('s'))
console.log(rest)