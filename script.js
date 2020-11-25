// check that files are linked
console.log("JS Linked!");

// ex 1
let ownerName = "Autumn"; // declare variable
console.log(`Hello ${ownerName}`); // format variable output in console

// ex 2
ownerName = "Chris"; // redefine variable
alert(`Hello ${ownerName}`); // format variable output in alert

// ex 3
let petName = prompt(`${ownerName}, what is your pet's name?`); // prompt for variable value
console.log(petName); // output variable value

// ex 4
let petAge = prompt(`${ownerName}, how old is your pet?`); // prompt for variable value
petAge = parseInt(petAge); // convert type
console.log(`${petName} is ${petAge} years old. Next year ${petName} will be ${petAge + 1}.`); // format output in console and do simple math

// ex 5
let isTrained = confirm(`Is ${petName} trained? Choose "ok" for yes or "cancel" for no.`); // prompt for variable value
alert(`${ownerName}, it is ${isTrained} that your ${petAge} year old pet, ${petName}, is trained.`); // format output in alert