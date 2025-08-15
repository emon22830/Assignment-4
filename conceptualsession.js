
//Task-1
// function sum(num1, num2){
//     let result = num1 + num2;
//     return (num1+num2) ;
// }

// function multiply(num1, num2){
//     let result = num1 * num2;
//     return (result)
// }

// sum(23,45);
// multiply(2,3)


// let result = sum(34,36)+sum(3,2)

// console.log(result);

//Task-02
// function sumOfArray(arr){
//     if(Array.isArray(arr) == false){
//         return "Invalid"
//     }
//     let sum = 0;
//     for(let num of arr){
//         if(typeof num !=="number"){
//             return "Invalid";
//         }
//         sum = sum+num
//     }
//     return sum
// }

// console.log(sumOfArray([1,2,3,"ekro" ,6,8,9]))


//Task-3
// function countVowels(str) {
//     if (typeof str !== "string") {
//         return "Invalid";
//     }

//     let NumOfVowel = 0;
//     for (let ch of str) {
//         if (
//             ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
//             ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
//         ) {
//             NumOfVowel += 1;
//         }
//     }
//     return NumOfVowel;
// }

// console.log(countVowels("Asdhr")); // Output: 1


//Task-05 

function willSuccess(marks){

    if(Array.isArray(marks)){
        return "Invalid";
    }
    let passNum = 0;
    let FailNum = 0;

    for(let mark of marks){

        if(typeof mark !== "number"){
            return "Invalid";
        }


        if(mark>=50){
           passNum += 1; 
        }
        else{
            FailNum += 1;
        }

    }
    
        if(passNum>FailNum){
            return true
        }
        else{
          return false
        }
}


console.log(willSuccess([71,55,'90',90,78]))



