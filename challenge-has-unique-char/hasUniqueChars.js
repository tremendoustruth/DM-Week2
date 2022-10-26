
let sampleString = "hasUniq";
console.log(sampleString);
function hasUniqueChars(string){
    for (let i = 0; i < string.length; i++)
        for (let j = i+1; j < string.length; j++)
            if (string[i]===string[j])
                {console.log("false")};
    console.log("true");
}

let word = "OneHundred"
const uniqueCount = (str) => {
    let is_equal = false;
    let set_str = new Set(str);
    if (set_str.size === str.length)
        is_equal = true;
    return is_equal;
}
console.log(uniqueCount(word));
hasUniqueChars(sampleString);