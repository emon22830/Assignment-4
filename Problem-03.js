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

console.log(bestTeam({name:"Brazil", foul: 5, cardY:1, cardR:0}, {name:"Argentina", foul:7, cardY:0, cardR:12}))





// function bestTeam(player1, player2){
//     if(typeof player1 !== "object" || player1 === null ||
//         typeof player2 !== "object" || player2 === null ||
//         Array.isArray(player1) || Array.isArray(player2)){
//             return "Invalid"
//         }

//         let team1Score = player1.foul + player1.cardY + player1.cardY
//         let team2Score = player2.foul + player2.cardY + player2.cardY


//         if(team1Score<team2Score){
//             return player1.name
//         }
//         else if(team2Score>team1Score){
//             return player2.name;
//         }
//         else{
//             return "Tie"
//         }
    
// }


// console.log(bestTeam({name: "Germany",  foul: 5, cardY:5, cardR:6},
//     {name: "Argentina",  foul: 5, cardY:5, cardR:6}
// ))