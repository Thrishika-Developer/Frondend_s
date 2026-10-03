// a=10
// b=20
// choise = '/'

// switch(choise){
//      case '+':
//         console.log(a+b)
//         break
//         case '-':
//         console.log(a-b)
//         break
//         case '*':
//         console.log(a*b)
//         break
//         case '/':
//         console.log(a/b)
//         break
//         case '%':
//         console.log(a%b)
//         break
//         case '**':
//             console.log(a**b)
//             break
//         default:
//             console.log("Not match the value")
// }

//--------------------------------------------------------

//positive or negative number

num = 5
if(num>0){
    console.log("Positive number")
}
else{
    console.log("Negative number")
}

// Atm withdrawal
let balance  = 0
let amount = 60000
if(balance>0){
    if(amount <= balance){
        console.log("withdraw successfull")
        console.log("Account amount details:",balance)
        balance -= amount
        console.log("withdrawal amount",amount)
        console.log("balance amount",balance)

    }
    else{
    console.log("withdrawal failed")
}
}

let username ="admin"
let password ="admin"
if(username =="admin"){
    if(password=="admin@123"){
        console.log("login success")
    }else{
        console.log("Login not successful")
    }
    
}