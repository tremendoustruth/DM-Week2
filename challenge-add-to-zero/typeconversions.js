let t1 = true
let t2 = true
let f1 = false
let f2 = false
// return to me the output and what variable it will return
console.log(t1 && t2); t2; true 

console.log(t2 && t1);

console.log(t1 && f1);

console.log(f1 && t1);

console.log(f1 && f2);

console.log(f2 && f1);
              
let let_add_falsy = (undefined && undefined) + 2  
console.log(let_add_falsy);

let let_add_truthy = ("1.2" && true) + 2
console.log(let_add_truthy);

//what would this return
console.log(((1 && 2) && (false && false)))