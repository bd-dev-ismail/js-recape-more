function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a vaild number'
    }
    return num1 + num2;
}

const userInput = add(400, 45);
// console.log(userInput)

function multiply(num1, num2){

    return num1 * num2;

}
const output = multiply(10, 10);
console.log(output);