const add = (num1, num2) => {
    return num1+num2
}

console.log(add(1,2))

// # //can store the invocation of a function to a variable and use that variable later on.
// # //Why use callbacks? flexibility and reusability

function innerFunction(){
    return "I am a callback"
}

function anotherInnerFunction(){
    return "Hello there"
}

function outerFunction(cbname){
    console.log(cbname())
}

outerFunction(innerFunction) //innerFunction passed in as cbname placeholder
outerFunction(anotherInnerFunction)

const outerFn = (callback) => console.log(callback());
outerFn(anotherInnerFunction);

const letterarray = ['a','b','c','d','e']
letterarray.forEach((element, index)=>{console.log(`${element} is at index ${index}`)}) 

const numArr = [1,2,3,4,5]

//map function creates copy

const mappedArray = numArr.map((element, index)=> element+=2)

console.log(mappedArray) // returns copy of numArray with each value incremented by 2

//filter method is not destructive (original array will remain same)
// if statement evals to true, element will be included in copy

//Write function that loops over an array of numbers, include a callback function; filter out any number that is not evenly divisible by 2
//log the new array

const filtered = numArr.filter((num)=>{return num%2===0}) //condition evals to true
console.log(filtered) // returns even array value

//reduce method

const reduced = numArr.reduce((accum, currentindex) => {return accum+currentindex})

console.log(reduced)
//rememeber, you can chain methods together.

const myNum = numArr.filter(num=>num>2).map(num=>num*3).reduce((acc, index)=>acc+index)
console.log(myNum)



