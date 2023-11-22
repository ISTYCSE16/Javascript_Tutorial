/* 


*/

let x = 10;
let color = "green";

/*
`==` Means if x = number i.e 10, but you check if x = "string of that number" i.e "10"
It will still compare.
if x = 10, then if(x == '10') and if(x == 10) will both work
*/
if (x == 10) {
    console.log("x number, compared to number, still works for '=='");
}
if (x == '10') {
    console.log("x number, compared to string, still works for '=='");
}

/*
`===` will match only similar datatypes
i.e. Number will only match with number
*/
if (x === 10) {
    console.log("Number and Number TypeMatch");
}
if (x === '10') {
    color = "yellow";
}
console.log("Value of color: " + color + ", If it hasn't changed, x is a number, else it's a string");

// If...Else If
let a = 10;
let b = 100 ;

if (a === b) {
    console.log("Both Equal");
} else if (a > b) {
    console.log("a is Bigger");
} else {
    console.log("b is Bigger");
}

// Shorthand Version of if...else if
color = (a > b)? "red" : "yellow";
console.log(`${color} represents whether a is large or b is large`); 

// Switch Statement
switch(color){
    case "red":
        console.log("a is larger");
        break;
    case "yellow":
        console.log("b is larger");
        break;
    default:
        console.log("a and b might be equal");
        break;
}