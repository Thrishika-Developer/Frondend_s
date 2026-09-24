// // if,if else ,nestedif..else,ladder if...else
// // ternary operator - switch case

// age = 25
// if(age >= 18){
//     console.log("Eligible to vote")
// }
// if(age <= 18){
//     console.log("Not eligible to vote")
// }

// mark = 30
// if(mark >= 35){
//     console.log("pass")
// }
// if(mark < 35){
//     console.log("Fail")
// }

// // if else
//     age= 30
//     if(age >= 18){
//         console.log("Eligiblee to vote")
//     }
//     else{
//         console.log("Not eligible to vote")
//     }

// num = 10
// if(num%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// num = 7
// if(num%2!=0){
//     console.log("odd")
// }
// else{
//     console.log("even")
// }

// a=10
// b=5
// if(a>b){
//     console.log("A is biggest value")
// }
// else{
//     console.log("B is biggest value")
// }

// num=10
// ans = num%2==0 ? "even": "odd"
// console.log(ans)

// age = 20
// elg = age>=18 ? "eligible": "not eligible"
// console.log(elg)

// a=100
// b=10
// ans = a>b ? "a is biggest" : "b is biggest"
// console.log(ans)

// let marks = 80
// if(marks >=90){
//     console.log("Grade A+")
// }
// else if(marks >=80){
//     console.log("Grade B+")
// }
//  else if(marks >=70){
//     console.log("Grade c+")
// }   
// else if(marks >=60){
//     console.log("Grade d+")
// }   
// else {
//     console.log("fail")
// }

// num = 0
// if(num>0){
//     console.log("+ value")
// }
// else if(num <0){
//     console.log("- value")
// }
// else{
//     console.log("zero")
// }


// a=10
// b=20
// c=30
// if(a>b && a>c){
//     console.log("A is biggest value")
// }else if(b>a && b>c){
//     console.log("b is biggest value")
// }else if(c>a && c>b){
//     console.log("c is biggest value")
// }
// else{
//     console.log("a ,b,c is same value")
// }

// nested if
a=10
b=20
c=30
if(a>b){
    if(a>c){
        console.log("a is biggest value")
    }
    else{
        console.log("c is biggest value")
    }
}
else{
    if(b>c){
        console.log("b is biggest value")
    }
    else{
        console.log("c is biggest value")
    }
}

let mark = 80
if(mark>=35){
    if(mark>85){
        console.log("Destination")
    }
    else{
        console.log("pass")
    }
}
else{
    console.log("Fail")
}