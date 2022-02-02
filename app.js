// asking the question
let question = prompt("Enter a number.");
let question2 = prompt("Enter +, -, *, or /");
let question3 = prompt("Enter another number.");


// global variables
let result;
let result2;
let result3;
let finalresult;
let error;

isNaN(question)

// conditional statement
if (isNaN(question)===false) {

    result = question
    Number(result)

}else  {

    result = "You can only enter numbers in box 1. Refresh the page and try again."
    document.body.innerHTML=result
}
   if (question2==="+"||question2==="-"||question2==="/"||question2==="*") {

       result2 = question2

   }else {
       result2 = "You can only enter +, -, /, or * in box 2. Please refresh the page and try again."
       document.body.innerHTML=result2
   }

isNaN(question3)
   if (isNaN(question3)===false){
       result3 = question3
       Number(result3)
   }else  {
       result3 = "You can only enter numbers in box 3. Refresh the page and try again."
       document.body.innerHTML=result3
   }

   if (result2==="+"&&isNaN(question)===false&&isNaN(question3)===false){
       finalresult = Number(result) + Number(result3)
       document.body.innerHTML=finalresult

   }
    else if (result2==="-"&&isNaN(question)===false&&isNaN(question3)===false){
    finalresult = result - result3
    document.body.innerHTML=finalresult
}
   else if (result2==="*"&&isNaN(question)===false&&isNaN(question3)===false){
       finalresult = result * result3
       document.body.innerHTML=finalresult
   }
   else if (result2==="/"&&isNaN(question)===false&&isNaN(question3)===false){
       finalresult = result / result3
       document.body.innerHTML=finalresult
   }


if (isNaN(question)===true&&isNaN(question3)===true){
    error= "Please only input numbers into box 1 and 3"
    document.body.innerHTML=error;
}











// else if (question==="fantastic"||question==="Fantastic"){
//         result="Go you"
//
// }else{
// result="Im sorry your day was not good"
// }
//
// // second question
// if (question2==="outside"|| question2==="Outside"){
//     result2="Hooray outdoors"
//
// }else{
//     result2="Go outside"
// }
//
// //Final question
// if (question==="good"&&question2==="outside"){
//     result3="It's probably a good idea to go outside to have a good day!"
// }else{
//     result3="Go exercise"
//}

// write answer into body tag

