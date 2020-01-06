
// Installation
  // CLI
  npm install - g typescript

// Compiling the code
  //CLI
  tsc fileName.ts

  // Adding the type annotation
function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);


// Interfaces (like objects)
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user);


// Classes
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);


// Running TypeScript webapp with HTML
  // this will run the 'greeter.js' file
<!DOCTYPE html >
<html>

  <head>
    <title>TypeScript Greeter</title>
  </head>

  <body>
    <script src="greeter.js"> </script>
  </body>

</html>



// Review
class Student {
  fullname: string;
  constructor(public firstname, public middleinitial, public lastname) {
    this.fullname = firstname + " " + middleinitial + " " + lastname;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person : Person) {
  return "Hello " + person.firstname + " " + person.;
}

var user = new Student("Jane", "M.", "Username");
