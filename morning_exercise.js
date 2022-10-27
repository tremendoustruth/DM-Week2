
let word = "sample"
reversed = word.split("").reverse().join("")
console.log(reversed)

function isPalindrome(string){
    let reversed = string.split("").reverse().join("")
    if (string === reversed){return true}
    else {return false}
}

console.log(isPalindrome("boolean"))

