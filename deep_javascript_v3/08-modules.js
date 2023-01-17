// Modules /////////////////////////////////////////////////////////////
// Modules are a way to organize code and share functionality between
// different files. Modules are a way to organize code and share
// functionality between different files.

// Namespace Pattern
const workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("What is implicit binding?");

// Classic Module Pattern
var myWorkshop = (function Module(teacher) {
  var publicAPI = { ask, };
  return publicAPI;

  //****************//
  function ask(question) {
    console.log(teacher, question);
  }
})("Kyle");

myWorkshop.ask("What is a closure?");

// Factory Module Pattern
function WorkshopModule(teacher) {
  var publicAPI = { ask, };
  return publicAPI;

  //****************//
  function ask(question) {
    console.log(teacher, question);
  }
}

const workshop2 = WorkshopModule("Kyle");
workshop2.ask("What is a module?");

// ES6 Modules and Node.js
// workshop.mjs

const ourTeacher = "Kyle";

// Everything you export is public, everything you don't is private
export default function ask(question) {
  console.log(ourTeacher, question);
}

// A couple of ways to import:
import ask from "./workshop.mjs";
// Namespace style of import
import * as workshop from "./workshop.mjs";