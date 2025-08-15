//Problem-01 Train TT's Fine Calculator

function totalFine(fare){
    if(typeof fare !== "number" || fare <0){
        return "Invalid";  
    }
        
     const fineCharge = fare * 0.2
     const  serviceCharge = 30;
     const  fine = fare + fineCharge + serviceCharge
   
     return fine ;
}

let fine = totalFine(200);
console.log(fine);





// function totalFine(fare){
//     if(typeof fare <0 || fare === "string"){
//         return "Invalid"
//     }
//     let fine = fare + fare * 0.2 + 30;
//     return fine;
// }


// console.log(totalFine(50));