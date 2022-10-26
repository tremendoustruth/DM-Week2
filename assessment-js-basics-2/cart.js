///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const cartTotal = cart.reduce( (prev, current) => {
    return prev+current.price
},0); // the reduce function takes a callback as a parameter and returns the accumulated total of the cart

console.log(cartTotal); 


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax){
    let postTax = cartTotal*(1+tax); //calculates tax on food 
    let checkout = postTax*(1-couponValue); // calculates the total after the coupon 
    return checkout;
}

console.log(calcFinalPrice(cartTotal, .20, .06)); 

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

*/
// The customer properties will include: Name (integer), Age (integer), email (string), Visits (integer); I chose these properties as they will allow easy, standard categorization of customers for mailing lists and data analytics. The data tyes are integers for numerical values, as floats would not be necessary.
/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

// Class to define standard customer object
class Customer{ 
    constructor(name, age, email, visits) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.visits = visits;
}
}

let Bushra = new Customer("Bushra", 31, "bushra@dev.com", 3); // sample customer 
console.log(Bushra);