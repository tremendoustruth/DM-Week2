// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
let value = false;
// Write your solution below:
//Write a program that checks to see if any two elements in an array sum to 0.

for (let i = 0; i<array.length;i++){ // nested for loops to check sum of all possible combinations of two elements
    for (let j = i+1; j<array.length; j++){
        if (array[i] + array[j] === 0){
            value = true;
            break // breaks out of current process once the condition is met.
        }
    }
}

console.log(value);