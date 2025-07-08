//import { apiKey } from "./util.js";
//import apiKey from "./util.js";

//import { useRef } from "react";

//import { apiKey, abc as content } from "./util.js";

//import * as util from  "./util.js"

//console.log(content);

//let userMessage = "Hello world!";
//const constMessage = "asdf";


//function greet(userName, message = "hello!!") {
//    console.log(userName);
//    console.log(message);
//}

//greet("ig", "hello");
//greet("fdsa");

//function createGreeting(userName, message = "Hello!") {
//    return "Hi, I am " + userName + ". " + message;
//}

//const greeting1 = createGreeting("HG");
//console.log(greeting1);

//const greeting2 = createGreeting("hg", "aaaaa");
//console.log(greeting2);

//function () {
//    console.log('Hello');
//}

// const user = {
//     name: 'HG',
//     age: 22,
//     greet() {
//         console.log('hello');
//         console.log(this.age);
//     }
// };

// console.log(user.name);
// user.greet();

// class User {
//     constructor(name, age){
//         this.name  = name;
//         this.age = age;
//     }

//     greet(){
//         console.log('Hi');
//     }
// }

// const user1 = new User("igyeong", 20);
// console.log(user1);

// user1.greet();

// const hobbies = ["sports", "cooking", "reading"];
// console.log(hobbies[0]);

// hobbies.push("working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "sports");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({text: item}));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Huigyeong", "Na"];

// console.log(firstName);
// console.log(lastName);

// const {name: userName, age: userAge} = {
//     name: "HG",
//     age: "22"
// };

// const hobbies = ['sports', 'cooking'];
// const newHobbies = ['reading'];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//     name: "HG",
//     age: 22
// };
// const extendedUser = {
//     isAdmin: true,
//     ...user
// };

// console.log(extendedUser);

// const password = prompt('Your password');

// if (password === "Hello"){
//     console.log("Hello works");
// }
// else if (password === "hello"){
//     console.log("hello works");
// }
// else {
//     console.log("Acces not granted.");
// }

// const hobbies = ['sports', 'cooking'];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// function handleTimeout(){
//     console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//     console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//     console.log('More timing out...');
// }, 4000);

// function greeter(greetFn){
//     greetFn();
// }

// greeter(() => console.log("Hi"));

function init(){
    function greet(){
        console.log('hi');
    }

    greet();
}

init();