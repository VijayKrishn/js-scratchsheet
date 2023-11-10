// Variables

// Pascel Case -- CurrentUserAge
// Snake Case - current_user_age
var name = 'Vijay'; // cannot start name with number and cannot contain ' ' or '-'
console.log(name);

let price = 250;
const name_another = 'krishn'; // cannot reassign
console.log(price, name_another)
let check = false;
console.log(typeof price); //displays the primitive type

price = 300;
let some = undefined; // undefined type
let color = null; // null type
console.log(price, name_another);

let person = { // object
    name_p : 'Vijay',
    age_p : 40,
    hobby_p : 'reading',

    homeAddress_p: {
        long: 44.55,
        lat: 33.44,
    },
    friends_p : ['rakesh', 'rajesh', 'ramya'],
    calculateAge : function() {
        console.log(`My age is ${this.age}`); // this represents the fields inside the object
    }
};
console.log(person);
let friends = ['rakesh', 'rajesh', 'ramya']; // array starts with 0 index
console.log(friends[1]);

// Functions

function showMyName(num1, num2) {
    console.log('passed name is ' +name);

    const sum = num1 + num2;
    return sum;
}

// `` template literals
var text = `vijay has
a car`;
const result = showMyName(40, 60);
console.log(`the result is ${result}`);

// ** power operator, +, -, *, /, %, +=, -=, ++, --
// > < >= <= ===(equals) !==(not equals), == data type doesnt matter
// logical operators and (&&), or (||), not (!)

// Conditional Statements
    /*
    if(condition1) {
        statements
    } else if(condition2) {
        statements
    } else(condition3) {
        statements
    } */

    /*
    switch(condition){
        case 'conditional':
        break;
    } */

// Ternary Operators

let num1 = 10;
let num2 = 2;
let max = num1 > num2 ? num1 : num2;

console.log(
            num1 % 3 === 0 && num1 % 5 === 0
            ? 'Fizzbuzz'
            : num1 % 3 === 0
            ? 'Fizz'
            : num1 % 5 === 0
            ? 'Buzz'
            : 'Nothing');

// Loops

for(let index = 1; index <= 4; index++) {
    console.log("Ravan", index);
}

let index = 1;
while(index <= 5){
    console.log("Ramya", index);
    index++;
}

do {
    console.log("hide", index);
    index++;
} while(index < 5);

// for .. in loop

const objs = {
    name : 'vijay',
    age : 40,
}
for(let key in objs) {
    console.log(key, objs[key]);
}
for(let i in friends) {
    console.log(friends[i]);
}

// for .. of loop

for (let i of friends) {
    console.log(i);
}

for(let i = 1; i <= 20; i++) {
    if(i === 10) {
        break;
    }
    console.log(i);
}

for(let i = 1; i <= 20; i++) {
    if(i === 10) {
        continue;
    }
    console.log(i);
}

// Infinite loops - conditions are not terminating
// nested loop - loop within a loop

// Strings
let country = 'India';
console.log(country[3]);
console.log(country[8]); // gives undefined
console.log(country.charAt(8)); // gives empty
// toUpperCase(), toLowerCase(), includes(String), startsWith()
// endsWith()

let msg = `Vijay Hi! my name is Hi Raj`;
let num = 123;
let arr = [1,2,3,4]
console.log(msg.search(`Hi`)); // first ocurrance
console.log(msg.indexOf('Hi'));
console.log(msg.lastIndexOf('Hi'));
console.log(num.toString()); // boolean can also be converted to string
console.log(arr.toString());
let m = msg.concat(num);
console.log(m);
console.log(msg.split(` `));
console.log(msg.slice(0,6)); // last index not included
console.log(msg.slice(6));
console.log(msg.slice(-12, -1));
console.log(msg.substring(0,5));
console.log(msg.substr(0,4)); // 2nd param is length 
msg = 'Hi Vijay "It\'s a nice course!"'; // \ is escape char
console.log(msg);
msg[0] = 'B'; // string in immutable, assign again
console.log(msg);

// JS- Object

person.email = 'vijay@gmail.com';
person['phone'] = '78989767';
console.log(person);

delete person.phone;
console.log(person);

person.calculateAge();
console.log(Object.keys(person)); // fields inside object
console.log(Object.values(person));  // values of fields in object

// Object destructuring
const {name_p, age_p, hobby_p, homeAddress_p, friends_p, calculateAge, email} = person
const {long, lat} = homeAddress_p

console.log(long);
const another_per = {};
Object.assign(another_per, person); // clones the existing object
console.log(another_per);
console.log(Math.PI); // math object
const userData = JSON.stringify(person);
console.log(JSON.parse(userData));

// functions

function aboutMe(name = 'Vijay', age = 32) {
    const msg = `I am ${name} and I am ${age} years old..`
    console.log(msg);
}

aboutMe('Meghna', 27);
aboutMe(); // default parameters

// function expression
const sumCalc = function(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(sumCalc(5,8));

// arrow function
const calSum = (num1, num2) => num1 + num2;
console.log(calSum(13,45));

// Rest Parameter
function multiply(...args) {
    console.log(args);
    let prod = 1;
    for(let num of args) {
        prod *= num;
    }
    return prod;
}
console.log(multiply(2,3,5,6,7));

// arrays
const nos = [12, 13, 14, 15, 16];
nos.unshift(9,10,11); // adds elents at the start
console.log(nos);
nos.push(17,18,19); // adds element to the end
console.log(nos);
nos.splice(3, 0, 67,89,95); // adds elements at specified positions
console.log(nos);
nos.shift(); // remove element from start
console.log(nos);
nos.pop(); // last element will be removed
nos.splice(2,3);
console.log(nos);
console.log(nos.includes(15));
console.log(nos.indexOf(16));
nos.lastIndexOf(17);

// finding object in array
const doctors = [
    {name: 'VK', age: 20},
    {name: 'RK', age: 40},
    {name: 'MN', age: 30},
]

const output = doctors.find(function(doctor){
    return doctor.name ==='RK';
});
console.log(output);

// sorting & reversing array
nos.sort(); // ascending order
nos.reverse(); // descending order
console.log(nos);
doctors.sort((d1, d2) => (d1.age > d2.age) ? 1 : (d1.age === d2.age) ? 0 : -1);
console.log(doctors.reverse());

// array method - every, some
const inps = [6,7,8,1,-2,5,4,9];
const inps_one = [78,87,93,99];
const data = inps.every(no => no > 0);
console.log(data);
const data_one = inps.some(no => no > 0);
console.log(data_one);
const full = inps.concat(inps_one);
const slice_inp = full.slice(3,6);
console.log(slice_inp);

// spread operator
console.log(...full);
const copiedArray = [...full];
console.log(copiedArray);
const full_one = [...inps, ...inps_one];
console.log(full_one);
// joining array
let inp_two = [1,2,3,4];
let joinArray = inp_two.join('-');
console.log(joinArray);
// mapping array
const mulByTwo = inp_two.map(i => i*2);
console.log(mulByTwo);
//filtering array
let onlyOddNos = inp_two.filter(i => i%2 === 1);
console.log(onlyOddNos);
// reduce array
let tot = 0;
const reduceSum = inp_two.reduce((tot, i) => tot+i);
console.log(reduceSum);

// set
let set = new Set();
set.add("Rama");
set.add("Sita");
set.add("Hanuman");
set.add("Sita");
console.log(set.size);
set.delete("Hanuman");
set.forEach(el => console.log(el));
set.clear();
console.log(set);

// map
let map = new Map();
map.set('Mange', 'Banana');
map.set('Rama', 'Sita');
map.set('Score', 100);
console.log(map.has('Mange'));
map.delete("Mange");
console.log(map);
console.log(map.values());
for(let key of map.keys()) {
    console.log(key);
}
map.clear();

// weak set and weak map - only objects can be stored inside
const ws = new WeakSet();
const object1 = {};
const object2 = {};
ws.add(object1);
ws.add(object2);
console.log(ws.has(object1));
ws.delete(object2);

const wm = new WeakMap();
const object3 = {};
const object4 = {};
wm.set(object3, 1234);
wm.set(object4, "rajkiran");
console.log(wm.has(object1));
console.log(wm.get(object4));
wm.delete(object3);

// modules
// import addnumber from "./main.js";
// console.log(addnumber(41,53));

// pad start, pad end, trim start, trim end
let minute = '4';
let hour = '8';
console.log(minute.padStart(4,'0'));
console.log(hour.padEnd(5, '0'));
let trimname = '    Vijay    ';
console.log(trimname.trim());

// error handling
console.log(Math.PI.toFixed(5));
function div(a,b) {
    if(b === 0) {
        throw new SyntaxError("Second param cant be zero");
    }
    return a/b;
}

try {
    console.log(div(5,0));
} catch(e) {
    console.log(e);
    console.log(e.name);
    console.log(e.message);
} finally { console.log('It worked')};

// regex
const regExp = /vijay/gi;
console.log(regExp.test('Hi I am Vijay'));
console.log(regExp.exec('This is vijay'));
const str = 'Hi My name is Vijay vijay Vijay';
console.log(str.match(regExp));
console.log(str.search(regExp));
console.log(str.replace(regExp, 'Meghna'));

// Factory functions
function pers_obj () {
    const person_one = Object.assign({}, person);
    return person_one;
}
const user1 = pers_obj();
const user2 = pers_obj();
console.log(user1);

const homeAddress = {
    street : 'A',
    city : 'B',
    zipCode : 'C',
};
// factory function
function homeAddress1(street, city, pin) {
    return {
        street : 'A',
        city : 'B',
        zipCode : 'C',
    };
}
// constructor function
function HomeAddress(street, city, pin) {
        this.street = street;
        this.city = city;
        this.zipCode = pin;
}

// Async
console.log('Before');
function fetchUser(){
    setTimeout(function() {
        console.log(`Hi my name is Vijay`);
        return{
            name : 'Goud',
            age : 30,
        };
    },2000);
}
const usr = fetchUser();
console.log(usr);
console.log('After');
//callback
function fetchUser1(userId, callback){
    setTimeout(function() {
        console.log(`Hi my name is Vijay`);
        const fetchedUser = {
            id : userId,
            name : 'A',
            email : 'vijay@gmail.com',
        };
        callback(fetchedUser);
    }, 2000);
}
fetchUser1(12345, function(user){
    console.log(user);
    sendMail(user.email,function(response){
        console.log(response.success);
    });
});
function sendMail(userEmail, callback) {
    setTimeout(function(){
        console.log(`sending email to ${userEmail}`);
        const response = {success:true};
        callback(response);
    }, 3000);
}
// promises - alternative to callback
const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
            // resolve(1);
            reject(new Error('Hi there is some error'));
        }, 2000);
});
console.log(promise);
promise.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err.message);
});

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('There were some issues')), 2000);
});
Promise.all([promise1, promise2]).then((res) => console.log(res))
    .catch((err) => console.log(err.message));

// Fetch web API
const gitAPI = fetch('https://api.github.com/users/andrew');
gitAPI.then((res) => res.json())
    .then((profile) => console.log(profile))
    .catch((e) => e.message);
console.log(gitAPI);
// Async await
async function getInfoFromGit(){
    const res = await fetch('https://api.github.com/users/andrew');
    const profile = await res.json();
    console.log(profile);
}
getInfoFromGit();