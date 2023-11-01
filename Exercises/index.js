/*
console.log("Hello World");
console.log("Halo, dunia!"); // Indonesian
console.log("Ciao, mondo!"); // Italian
console.log("Hola, mundo!"); // Spanish

// Variable declaration
let greeting = "Hej, verden"

// Log greeting 3 times
for (let i = 0; i < 3; i++) {
    console.log(greeting);
}

console.log("'I'm awesome'!");

const name = "peter";
// YOUR CODE GOES HERE
console.log(`My name is ${name}. It has ${name.length} characters`);

let numberOfStudents = 34;
let numberOfTeachers = 2;

console.log(`Number of teachers: ${numberOfTeachers}`);
console.log(`Number of mentors: ${numberOfStudents}`);
console.log(`Total number of teachers and mentors: ${numberOfTeachers + numberOfStudents}`);

let total = numberOfTeachers + numberOfStudents;

console.log(`Percentage of trainees: ${Math.round(numberOfStudents/total*100)}%`);
console.log(`Percentage of mentors: ${Math.round(numberOfTeachers/total*100)}%`);

let pizza = {
    1: {name: "diablo", price: 79},
    2: {name: "margherita", price: 70}
}

let pick = prompt("The pizza's number you would like to order: ")
let number = prompt("Number of pizza you would like to order: ")

totalPrice = pizza[pick].price * number;


if (Number.isInteger(Number(number))) {
    console.log(`New pizza order: ${number} ${pizza[1].name}. The total price of your order: ${totalPrice}`);
}
else {
    alert("Please enter a valid number of orders");
}


let balance = 1000000;

if (balance > 10000) {
    console.log("I am rich 💰");
}
else {
    console.log("I am poor");
}


let mood = prompt("What is your mood? ")

if (mood === "happy") {
    document.write("Good job, you're doing great!");
}
else if (mood === "sad") {
    document.write("Every cloud has a silver lining");
}
else if (Number.isInteger(Number(mood))) {
    document.write("Beep beep boop");
}
else {
    document.write("I'm sorry, I'm still learning about feelings");
}

for (let i = 0; i < 3; i++) {
    console.log("Hello World");
}

for (let i = 1; i < 11; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    console.log("*");
}

for (let i = 5; i > -6; i--) {
    console.log(i);
}

for (let i = 5; i < 30; i = i + 3) {
    console.log(i);
}

// Random number between 0 and 10
const randomNumber = Math.floor(Math.random() * 11);
// Your code here
for (let i = 0; i < randomNumber; i++) {
    console.log("#");
}

for (let i = 1; i < 11; i++) {
    if (i < 6) {
        console.log(i);
    }
    else {
        console.log(`${i} is larger than ${i-1}`);
    }
}

for (let i = 1; i < 11; i++) {
    if (i < 4) {
        console.log(`${i} is a small number`);
    }
    else if (i < 7) {
        console.log(`${i} is a relatively small number`);
    }
    else if (i < 10) {
        console.log(`${i} is a large number`);
    }
    else {
        console.log(`${i} is ten`);
    }
}

let string = "copenhagen"

for (let i = 0; i < string.length; i++) {
    console.log(`${string[i]}`);
}

let string = "Hello";

for (let i = 0; i < string.length; i++) {
    if (i == 2) {
        console.log(`${string[i]} this is the middle character`);
    }
    else {
        console.log(`${string[i]}`);
    }
}

for (let i = 1; i < 101; i++) {
    if (i % 3) {
        console.log("Fizz", i)
    }
}

let interests = ["fodbold", "golf", "f1"];
console.log(`I have ${interests.length} interests`);

const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[5]);
console.log(fruits[0]);

const names = ['Peter', 'Susan', 'Charlotte'];
// Use the names array
const firstNameInArray = names[0];
const lastNameInArray = names[names.length-1];

console.log(firstNameInArray); // Peter
console.log(lastNameInArray); // Charlotte

const fruits = ['pear', 'banana', 'apple', 'grape'];
const firstFruitInArray = fruits[0];
const lastFruitInArray = fruits[names.length-1];

console.log(firstFruitInArray); // pear
console.log(lastFruitInArray); // grape

let favoriteSongs  = [];
favoriteSongs.push("Song");
const indexOfSong = favoriteSongs.indexOf("Song");
console.log(indexOfSong); // 1

const words = ["apple", "banana", "cherry", "date", "elderberry"];
words.forEach((value, index) => {
    console.log(`${value}: ${value.length}`);
});

const animals = ['cat', 'dog', 'bird', 'fish', 'elephant'];
let i = animals.indexOf("bird");
animals[i] = "parrot";
console.log(animals);

const grades = [85, 90, 78, 88, 76, 95, 89];
let i = 0;
grades.forEach((value, index) => {
    i = i + value;
});
console.log(`Average grade is ${Math.round(i/grades.length)}`);

let givenArray = [1, 2, 3, 4, 5];
let revArr = [];

givenArray.forEach((element, index) => {
    revArr[index] = givenArray[givenArray.length - index - 1];
});

console.log(revArr);

const words = ['apple', 'banana', 'cherry', 'date', 'fig'];
words.forEach((value, index) => {
    if (value.length > 5) {
        console.log(value);
    }
});

 */
/*

const searchData = ['apple', 'banana  ', '  Cherry', 'apple ', 'APPLE', '  Banana'];
let duplicates = [];

searchData.forEach((value, index) => {
    searchData[index] = value.trim().toLowerCase();

    if (duplicates.includes(value.trim().toLowerCase())) {
        searchData.splice(index);
    }
    else {
        duplicates.push(value.trim().toLowerCase());
    }
});

searchData.push("grape");
console.log(searchData);

let a = [5,6,3,4,6,34,5,5];
let b = [5,5,5,66,7,3,1,1,1,4];

function sortArray(a, b) {
    console.log(a.concat(b).sort(function(a, b){return a - b}));
}

sortArray(a, b);

//Create the initial javascript like this:
let number = "22";
let number2 = "22";

console.log(number + number2);
//Output: 2222

function plus(n, n2) {
    return console.log(parseInt(n)+parseInt(n2));
}

plus(number, number2);

//Create the initial javascript like this:
participants = ["nicklas;33","benjamin;44","lars;55"];
totalAge = 0;

participants.forEach((value, index) => {
    participants[index] = value.split(";");
    totalAge = totalAge + parseInt(participants[index][1]);
})

console.log(totalAge);

 */

/*
function someFunctionName(message = "no message") {
    console.log(message);
};

someFunctionName("hello"); // logs out hello
someFunctionName("abcde"); // logs out

 */

/*
function someFunctionName(a, b) {
    return a + b;
}

const returnedNumber = someFunctionName(2, 6);
console.log(returnedNumber); // 8

 */

/*
function someFunctionName(string) {
    if (string[0] === "a") {
        return true;
    }
    else {
        return false;
    }
}

console.log(someFunctionName('kea')); // false
console.log(someFunctionName('anna')); // true

 */
/*
function celciusToFahreneit(celcius) {
    return (celcius * 1.8) + 32;
}

console.log(celciusToFahreneit(30)); // 86 degree fahrenheit

function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

console.log(fahrenheitToCelcius(86));

function convertTemperature(inputScale, degrees){
    if (inputScale === "fahrenheit") {
        return console.log(celciusToFahreneit(degrees));
    }
    else if (inputScale === "celcius") {
        return console.log(fahrenheitToCelcius(degrees));
    }
    else {
        return console.log("invalid input");
    }
};

convertTemperature("fahrenheit", 30);
convertTemperature("celcius", 86);
convertTemperature("", 30);

 */
/*
function increaseByHalf(number) {
    return number * 1.5;
}

console.log(increaseByHalf(50)); // 75
console.log(increaseByHalf(100)); // 150

 */
/*
function logString(stringToLog, numberOfTimesToLog) {
    for (let i = 0; i < numberOfTimesToLog; i++) {
        console.log(stringToLog);
    }
}

logString('hello', 3);
// Log output
// hello
// hello
// hello

 */
/*

const re = /^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}[-]?\d{4}$/;

function validateCPR(number) {
    if (re.test(number)) {
        alert("true");
    }
    else {
        alert("false");
    }
}

let userCPR = prompt("Enter a CPR-number: ");

validateCPR(userCPR);

 */
/*
function someFunctionName(date) {
    date = date.split("/")
    return `${date[1]}-${date[0]}-${date[2]}`;
}

const reformattedDate1 = someFunctionName('10/24/2022');
console.log(reformattedDate1); // 24-10-2022

const reformattedDate2 = someFunctionName('5/9/2020');
console.log(reformattedDate2); // 9-5-2020;

 */

/*
function whatToWear(temperature) {
    if (temperature <= 0) {
        return "warm jacket and warm pants";
    }
    else if (temperature < 18) {
        return "jacket and pants";
    }
    else {
        return "shorts and a t-shirt";
    }
}

const clothesToWear = whatToWear(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt";

 */

/*

function getEventWeekday(number) {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = d.getDay();

    if ((day+number) < 7) {
        return weekday[day+number];
    }
    else {
        return weekday[(day+number)%7];
    }
}

// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday";

 */
/*
let someFunctionName = (n1, n2, n3) => n1+n2+n3;

console.log(someFunctionName(10, 20, 5)); // 35
 */
/*
let someFunctionName = (n1, n2, n3) => {
    let parameters = [n1, n2, n3];
    let largest = n1;
    parameters.forEach(value => {
        if (value > largest) {
            largest = value;
        }
    })
    document.write(largest);
}

someFunctionName(1, 20, 10);

 */
/*
let isHigher = (list, n) => {
    let avg = 0;
    list.forEach(value => {
        avg = avg + value;
    })
    avg = avg/list.length;
    if (n > avg) {
        return true;
    }
    else {
        return false;
    }
};

console.log(isHigher([10, 10, 10], 8));

 */
/*

let someFunctionName = (array) => {
    let parameters = array;
    let largest = array[0];
    parameters.forEach(value => {
        if (value > largest) {
            largest = value;
        }
    })
    document.write(largest);
}

someFunctionName([1, 5, 3]);

 */
/*
let findLongestName = (countries) => {
    let longestName = countries[0];
    countries.forEach(value => {
        if (value.length > longestName.length) {
            longestName = value;
        }
    })
    console.log(longestName);
}

findLongestName(["Australia", "Germany", "United States of America"]);

 */
/*
const strings = ["dog","cat","lazy","fox","jumps","over","the","fence","javascript","tobias rahim"]

let avg = array => {
    let count = 0;
    array.forEach(value => {
        count = count + value.length;
    })
    console.log(count/array.length);
}

avg(strings);

 */
/*
const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Isabel",
    "Jack",
    "Katherine",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Sophia",
    "Thomas",
    "Victoria",
    "William",
];

const result = list => {
    return list.filter((word) => word.length > 5);
}

console.log(result(firstNames));

 */
/*

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = list => {
    return list.filter((n) => n % 2);
}

console.log(result(numbers));

 */
/*
const hours = [2,4,12,1,0.5,3,4,5,10];

const result = list => {
    return list.map((n) => n * 3600);
}

console.log(result(hours));

 */
/*
const words = ["apple", "banana", "cherry", "agøøørk","date", "fig", "grape", "kiwi", "lemon", "mango", "orange"];

const filterLetters = (list, letter) => {
    console.log(list.filter((word) => word[0] === letter));
};

filterLetters(words, "a"); //returns [apple, agøøørk];

 */
/*

const numbers = [1, 2, 3, 2, 4, 5, 6, 3, 7, 8, 9, 1, 10];

const unique = list => {
    let newList= [];
    list.forEach(value => {
        if (!newList.includes(value)) {
            newList.push(value);
        }
    })
    return newList;
};

console.log(unique(numbers));

 */
/*
const strings = [
    "121256-7890",
    "987654-3210",
    "1004890123",
    "112233-44552",
    "111244-556611",
    "150690-3152asd",
];

const filterCPR = list => {
    const re = /^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}-\d{4}$/;
    return list.filter((number) => !re.test(number));
};

console.log(filterCPR(strings));

 */
/*

list = ["Australia", "Germany", "United States of America","Denmark","The United Kingdom of Great Britain and Northern Ireland","Independent and Sovereign Republic of Kiribati	"];

const mostWords = list => {
    let most = [list[0], 0];
    list.forEach(value => {
        let count = 1;
        for (let i = 0; i < value.length; i++) {
            if (value[i] === " ") {
                count++;
            }
        }
        if (count > most[1]) {
            most[0] = value;
            most[1] = count;
        }
    })
    return most[0];
};

console.log(mostWords(list));

 */
/*
const kitten = {
    furColour: "orange",
    age: "23"
};

const laptop = {
    brand: "Lenovo",
    ram: "5GB"
};

const phone = {
    operatingSystem: "iOS",
    hasStylus: true,
    megapixels: 12,
    batteryLife: "24 hours"
}

 */
/*
const me = {
    firstName: "Frederik",
    lastName: "Damsgaard",
    age: 22
};

console.log(me);

 */
/*

// console.log the values of each property of "kitten"
let kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown",
};

console.log(kitten.ageMonths, kitten.isFemale, kitten.furColour);
*/
const dog = {
    name: "Billy",
    wantsToPlay: false,
};
/*
// WRITE CODE BELOW THIS LINE
dog.name = "Rex";
dog.wantsToPlay = true;
// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true

 */
/*
const astronautsInSpace = {
    people: [
        {
            name: "Oleg Artemyev",
            craft: "ISS"
        },
        {
            name: "Denis Matveev",
            craft: "ISS"
        },
        {
            name: "Sergey Korsakov",
            craft: "ISS"
        },
        {
            name: "Kjell Lindgren",
            craft: "ISS"
        },
        {
            name: "Bob Hines",
            craft: "ISS"
        },
        {
            name: "Samantha Cristoforetti",
            craft: "ISS"
        },
        {
            name: "Jessica Watkins",
            craft: "ISS"
        },
        {
            name: "Cai Xuzhe",
            craft: "Tiangong"
        },
        {
            name: "Chen Dong",
            craft: "Tiangong"
        },
        {
            name: "Liu Yang",
            craft: "Tiangong"
        }
    ],
    message: "success"
};

console.log(astronautsInSpace.people.length);
console.log(astronautsInSpace.people[astronautsInSpace.people.length-1].craft);
console.log(astronautsInSpace.people[0].name.split(" ")[1]);
console.log(astronautsInSpace.people[0].name.substring(5));

 */

function CheckPass(user_data) {
    const usr = user_data['user'];
    const pw = user_data['password'];
    if (usr.length > 0 && pw.length > 0) {
        status = 'valid';
    }
    else {
        status = 'invalid';
    }
    alert('Status: ' + status);
}

CheckPass({user: "test", password: "1234"});


