/*  */
/**
 * Javascript hoisting referes to the process whereby the compiler allocates memory for variables and functions declaration prior the execution of the code
 *
 * The process is for declaration not for initialization
 *
 */

// Example 1
sayHello();

function sayHello() {
  console.log("Hi");
}

// Example 2
console.log(`I'm ${age} years old`); //age will be undifined

// Only declarations are hoisted
var age = 10;


// Example 3
// No hoisting, but since initialization also causes declaration (if not already declared), variables are available.

a = "Straw"; // Initialize a
b = "berry"; // Initialize b

console.log(`${a}${b}`); // 'Strawberry'


/**
 * Let and const hoisting
 * Variables declared with let and const are also hoisted, but unlike for var the variables are not initialized with a 
 * default value of undefined. Until the line in which they are initialized is executed, any code that accesses these 
 * variables will throw an exception.
 */


console.log(`My name is ${name}`);
console.log(`My lastname is ${lastname}`);

var name
let lastname