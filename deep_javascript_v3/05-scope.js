// Scope and Function Expressions //
function getStudentById(studentId) {
  return studentRecords.find(function matchId() {
    return record.id == studentId;
  });
}

function printRecords(recordIds) {
  var records = recordIds.map(getStudentById);

  records.sort(function sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) {
      return -1;
    } else if (record1.name > record2.name) {
      return 1;
    } else {
      return 0;
    }
  });

  records.forEach(function printRecord(record) {
    console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
  });
}

function paidStudentsToEnroll() {
  var idsToEnroll = studentRecords.filter(function needToEnroll(record) {
    return record.paid && !currentEnrollment.includes(record.id);
  })
  .map(function getStudentId(record) {
    return record.id;
  })

  return [...currentEnrollment, ...idsToEnroll];
}

function remindUnpaid(recordIds) {
  var unpaidIds = recordIds.filter(function isUnpaid(record) {
    var record = getStudentById(record);
    return !record.paid;
  });

  printRecords(unpaidIds);
};

var teacher = (function getTeacher() {
  try {
    const teacher = "Kyle";
    return teacher;
  } catch (e) {
    return "Unknown";
  }
})();

// block scope encapsulation
var myTeacher = "mike";
{
  // Blocks are not scopes until they have a let or const
  let myTeacher = "Kyle";
  console.log(myTeacher);
}
console.log(myTeacher);



function diff(x,y) {
  let tmp = 5;
  if (x > y) {
    console.log(`${x} is greater than ${y}`)
    let tmp = x;
    console.log(`tmp is ${tmp}`)
    console.log(`${y} is going to be assigned to x`);
    x = y;
    console.log(`${tmp} is going to be assigned to y`)
    y = tmp;
    console.log(`x is ${x} and y is ${y}`)
  }
  console.log(`outside if statement x is ${x} and y is ${y}`)

  return y - x;
}

console.log(diff(10, 0));

function repeat(func, num) {
  // var should signal a function scoped variable
  var result;
  // let should signal a localized variable
  for (let i = 0; i < num; i++) {
    result = func(result, i);
  }

  return result;
}

const myNum = 10;
let count = 0;
const repeatedNum = repeat(function repeatConsoleLog() {
  console.log(`repeated ${count + 1} times`);
  count++;
}, 5);

// Choosing let or var
// 1. Use let when you want to reassign a variable
// 2. Use var when you want to redeclare a variable
// 3. vars can be used in a scope, but lets cannot
function lookupRecord(searchStr) {
  try {
    var id = getRecord (searchStr);
  } catch (err) {
    var id = -1;
  }
  // Notice how we can return id because it is function scoped
  return id;
}

console.log(lookupRecord("1234"))

// Explicit let blocks
// When you are going to declare let, and only use it for a few lines of code,
//  you can use an explicit block and giving it it's own scope
function formatString(string) {
  {
    let prefix, rest;
    prefix = string.slice(0, 3);
    rest = string.slice(3);
    string = prefix.toUpperCase() + rest;
  }

  if (/^FOO:/.test(string)) {
    return string;
  }

  return string.slice(4);
}

console.log(formatString("foo:bar"));

// The const variable
// const is a variable that cannot be reassigned, and is best used for
//  variables that will never change and are known before runtime at the time
//  of declaration

// One of the tricks of const is that referential variables can be changed
const teachers = ["Kyle", "Suzy"];
teachers.push("Frank");
console.log(teachers);

let john = "John";
{
  const john = "Johnny";
  console.log(john);
}
console.log(john);

// You should only really use const on primitive values, and not on objects,
//  because you can still change the properties of an object

// Hoisting //
// Hoisting is the process of moving all variable declarations to the top of
//  the scope they are declared in before the code is executed
// Technically the JS engine does not hoist, but it does create a scope and we
//  can think of it as hoisting.  It technically handles variables and functions
//  during the first pass of the code, which is known as the compilation phase
student;
teacher;
console.log(student, teacher2);
var student = 'you';
var teacher2 = 'Kyle';

// Some people like taking advantage of the hoisting of a function declaration
// to put the function declarations at the bottom of the file, and the
// executable code at the top of the file for readability, for example:

// Executable code
const x = 3;
const y = 4;
const z = addAndMultiply(x, y);
echoResult(z);

// Function declarations
function addAndMultiply(x, y) {
  console.log(`Adding ${y} to ${x} and then multiplying it by ${y}`);
  return (x + y) * y;
}

function echoResult(result) {
  console.log(`The result is ${result}`);
}

var myTeacher = 'Kyle';
// This will print undefined because the above variable is hoisted, but the
//  assignment is not
otherTeacher();

function otherTeacher() {
  console.log(myTeacher);
  var myTeacher = 'Suzy';
}

var teacher3 = 'Kyle';
var teacher3;
getTeacher();

function getTeacher() {
  console.log(teacher3)
}
