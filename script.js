/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas'); 
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
// */
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);


// let x, y;
// x = y = 25 - 10 - 5; // 10
// console.log(x, y);

// const avarageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, avarageAge);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// const age = 15;

// if(age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991; 

// if(birthYear <= 2000) {
//     let century = 20; 
// } else {
//     let century = 21;
// }
// console.log(century);


// const kilograms = " kg";
// const meters = " m";

// const marksWeight = 80 ;
// const marksHeight = 1.69;
// console.log(marksWeight + kilograms, marksHeight + meters);

// const johnWeight = 92;
// const johnHeight = 1.95; 
// console.log(johnWeight + kilograms, johnHeight + meters);

// const bodyMassWeight = " BMI";
// const marksBMI = marksWeight / marksHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;
// console.log(marksBMI + bodyMassWeight, johnBMI + bodyMassWeight);

// markHigherBMI = marksBMI > johnBMI; 

// console.log(markHigherBMI);

// if (marksBMI > johnBMI) {
//     console.log("Mark's BMI is higher then John's!");
// } else {
//     console.log("John's BMI is higher then Mark's!");
// }


// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1; 
// console.log(n);

// console.log(2+4+5+'5');

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all ;");
// } else {
//     console.log('You should get a job!');
// }

// let height = 123;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is Undefined');
// }

const age = '18';

if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.loog('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if (favourite !== 23) console.log('Why not 23?');