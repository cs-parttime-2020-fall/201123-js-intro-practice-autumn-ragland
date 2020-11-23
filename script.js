console.log("JS Linked : 20 11 23 JS Intro Practice"); // checking that files are linked


// ex 1 : declare and output owner name
let ownerName = "Autumn"; // declared variable owner name
console.log(`Hello ${ownerName}`); // output variable's value to console

// ex2 : redefine owner name and alert in browser
ownerName = "Chris"; // redefine variable
alert(`Hello ${ownerName}`); // alert in browser

// ex 3 : prompt owner and output response
let petName = prompt(`${ownerName}, what is your pet's name?`); // prompt owner with personalized message and save response
console.log(petName); // outputting response 

// bonus 1 : prompting owner and outputting complex response
let petAge = prompt(`${ownerName}, how old is your pet?`); // prompt owner with personalized message and save response
petAge = parseInt(petAge); // convert type from string to integer
console.log(`${petName} is ${petAge} years old. Next year ${petName} will be ${petAge + 1}`); // formatted complex response using pet and and age with math

// bonus 2 : confirm from user and alert all values in formatted string
let isTrained = confirm(`Is ${petName} trained`); // confirming with owner
alert(`${ownerName}, it is ${isTrained} that your ${petAge} year old pet, ${petName}, is trained`);
console.log(`${ownerName}, it is ${isTrained} that your ${petAge} year old pet, ${petName}, is trained`);
