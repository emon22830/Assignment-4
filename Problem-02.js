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

console.log(onlyCharacter("hackme1@ru.c n"));









// function onlyCharacter(str){
//     if(typeof str !== "string"){
//         return "Invalid";
//     }
//     let result = "";
//     for(let i =0; i<str.length; i++){
//         let ch = str[i];
//         if(ch.toLowerCase() !== ch.toUpperCase()){
//             result += ch.toUpperCase()
//     }
//     else if(!isNaN(parseInt(ch)) || ch.match(/[^a-zA-Z\s]/)){
//         if(ch!== " "){
//             result += ch.toUpperCase();
//         }
//     }
//     }
//     return result;
// }

// console.log(onlyCharacter("jfgwv467w4qio tv"))