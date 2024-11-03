// 1. Verificar la edad para conducir
let age = prompt('Enter your age');
let num = parseInt(age);
let falta = 18 - num;
switch (true) {
    case num >= 18:
        console.log('You are old enough to drive');
        break;
    case num < 18:
        console.log(`You are left with ${falta} years to drive`);
        break;
    default:
        console.log('Entered value was not a number');
}

// 2. Comparar edades
let myAge = 19;
let yourAge = parseInt(prompt("Enter your age: "));

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me`);
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you`);
} else {
    console.log("We are the same age");
}

// 3. Comparar valores de a y b
let a = parseInt(prompt("Enter the value of A"));
let b = parseInt(prompt("Enter the value of B"));

// Usando if else
if (a > b) {
    console.log(`result with if...else: ${a} is greater than ${b}`);
} else {
    console.log(`result with if...else: ${a} is less than ${b}`);
}

// Usando operador ternario
let result = a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
console.log("result with ternary operator: " + result);

// 4. Verificar la estación del año
let month = prompt("Enter a month: ").toLowerCase();

if (month === "september" || month === "october" || month === "november") {
    console.log("The season is Autumn.");
} else if (month === "december" || month === "january" || month === "february") {
    console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
    console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
    console.log("The season is Summer.");
} else {
    console.log("Please enter a valid month.");
}

// 5. Asignar calificaciones según puntajes
let score = parseInt(prompt("Enter the student's score:"));

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade: F");
} else {
    console.log("Please enter a valid score between 0 and 100.");
}
