// Write your code below this line.
//Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)
//You can trust that this function will never be called with n < 0 or n > 10.

//returns a random integer between the two specified numbers, inclusive. We will input 1 and 10
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);}

function luckyNums(n){  
    let luckySet = new Set(); //sets only contain unique values; this allows to avoid writing out logic to check against matches in the array. 
    while (luckySet.size < n){ //while the set contains less than the specified number of values, add a random integer (1-10 inclusive) to it.
        luckySet.add(getRandomIntInclusive(1,10)) //calls the function getRandomIntInclusive.
    }
    return Array.from(luckySet) //returns the set values as an array.
}
console.log(luckyNums(10));

//There is an alternative method to achieve the same thing with a for loop.

let array = [1,2,3,4,5,6,7,8,9,10]
let random = getRandomIntInclusive(1,10)
function luckyNums2(num){
    luckies =[]
    for (let i = 0; i < num; i++){
        return luckies += 
    }
    
}
luckyNums2(8);