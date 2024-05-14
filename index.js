// ## Exercise 1.1 Create function following below :</br>

// add(a, b)</br>
// subtract(a, b)</br>
// multiply(a, b)</br>
// divide(a, b)</br>



function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}



console.log(add(1,5));
console.log(subtract(6,2));
console.log(multiply(4,9));
console.log(divide(15,5));

// ## Exercise 1.2 Create Function Inform---</br>

// console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);

function self(firstName, locate, hobby) {
        console.log("Hi! my name is" + firstName + " I live in"  + locate + " and enjoy" + hobby );
}

self(" Nattapon.", " Yasothon", " eating buffet.")