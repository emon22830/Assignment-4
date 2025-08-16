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




// Problem-02  Clean & Capitalize Characters

function onlyCharacter(str){
    if(typeof str !== "string"){
        return "Invalid";
    }
    let result = "";
    for(let i =0; i<str.length; i++){
        let ch = str[i];
        if(ch.toLowerCase() !== ch.toUpperCase()){
            result += ch.toUpperCase();
        }else if(!isNaN(parseInt(ch)) || ch.match(/[^a-zA-Z\s]/)){
            if(ch!== " "){
                result += ch.toUpperCase();
            }
        }
    }

    return result
}






// Problem-03: FIFA Best Team Award

function bestTeam(player1, player2){
    if(typeof player1 !== "object" || player1 === null ||
        typeof player2 !== "object" || player2 ===null ||
        Array.isArray(player1) || Array.isArray(player2) ){
            return "Invalid";
        }

        let team1Score = player1.foul + player1.cardY+ player1.cardR;
        let team2Score = player2.foul + player2.cardY + player2. cardY

        if(team1Score>team2Score){
            return player2.name;
        }
        else if (team2Score > team1Score){
            return player1.name
        }
        else{
            return "Tie"
        }    
}




// Problem-04: Same Same But Different

function isSame(arr1, arr2){
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid";
    }
        if(arr1.length !== arr2.length){
            return false;
        }
            for (let i = 0; i<arr1.length; i++){
                if(arr1[i] !== arr2[i]){
                    return false
                }
            }
    
    return true;
    
}





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




