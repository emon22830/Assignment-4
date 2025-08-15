
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
function sumOfArray(arr){
    if(Array.isArray(arr) == false){
        return "Invalid"
    }
    let sum = 0;
    for(let num of arr){
        if(typeof num !=="number"){
            return "Invalid";
        }
        sum = sum+num
    }
    return sum
}

console.log(sumOfArray([1,2,3,"ekro" ,6,8,9]))