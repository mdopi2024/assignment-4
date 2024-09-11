
function calculateTax(income, expenses) {
  if(income < 0 || expenses < 0 || income < expenses){
    return "Invalid Input" 
  }
   let difference = income - expenses;
   let tax = difference * 0.2;
   return tax;
}
let tk =calculateTax(6000, -1500)
console.log(tk)



function sendNotification(email) {
    if(email.includes('@') === false){
        return "Invalid Email"
    }
   let split = email.split('@')
   let firstPart = split[0];
    let lastPart = split [1]
    return firstPart + ' sent you an email from ' + lastPart;
}
let enterEmail =sendNotification('farhan34@yahoo.com')
console.log(enterEmail)




function checkDigitsInName(name) {
  if(typeof name !== 'string'){
    return "Invalid Input"; 
  }
  for(let i of name){
    if(!isNaN(parseInt(i))){
      return true;
    }
    
  }
  return false;
}

let enterName = checkDigitsInName('tajl23')
console.log(enterName)




function calculateFinalScore(obj) {
 if(typeof obj !== 'object' ||
   typeof obj.name !== 'string' || 
   typeof obj.testScore !== 'number' ||
   typeof obj.schoolGrade !== 'number' ||
   typeof obj.isFFamily !== 'boolean' ||
   obj.testScore > 50 ||
   obj.schoolGrade > 30
   
  
  )
   {
  return  "Invalid Input"
 }
 let totalScore = obj.testScore + obj.schoolGrade;

 if(obj.isFFamily === true){
  totalScore += 20;
  
 }
  return totalScore >= 80;
}
let object = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
let result = calculateFinalScore(object)
console.log(result)




// function  waitingTime(waitingTimes  , serialNumber) {
//  if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
//   return ' Invalid Input '
//  }
//  let sum = 0;
//  for(let i of waitingTimes){
//   sum += i;
//  }
// //  console.log(sum)
//  let avarage = sum / waitingTimes.length;
// //  console.log(avarage)

// let position =(serialNumber-1) - waitingTimes.length  
// // console.log(position)

// let yourTime = avarage * position;
// return yourTime;

// }

// let  result = waitingTime([13, 2], 6)
// console.log(result)




