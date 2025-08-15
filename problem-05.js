//Problem-05: Exam Result Report Generator

function resultReport(marks){
     if(!Array.isArray(marks)){
          return "Invalid"
     }
     
     let sum = 0;
     let passCount = 0;
     let failCount  = 0;
     for(let i = 0; i<marks.length; i++){
          sum +=  marks[i];
          if(marks[i]>=40){
               passCount++;
          }else{
               failCount++
          }
     }
     let finalScore = Math.round(sum/marks.length);
     return {finaleScore: finalScore, pass: passCount, fail: failCount}

}

console.log(resultReport([45,32,67,90,78]));


// function resultReport(marks){
//      if(!Array.isArray(marks)){
//           return "Invalid"
//      }

//      let sum = 0;
//      let passCount = 0;
//      let failCount = 0;

//      for(let i =0; i<marks.length; i ++){
//           sum += marks[i];
//           if(marks[i]>=40){
//                passCount++
//           }
//           else{
//                failCount++
//           }
//      }
//      let finaleScore = Math.round(sum/marks.length)
//      return {finale:finaleScore, pass: passCount, fail: failCount}


// }

// console.log(resultReport([34,67,78,57,90,56]))