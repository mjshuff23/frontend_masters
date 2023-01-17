// Closures /////////////////////////////////////////////////////////////////
// A closure is a function that remembers its outer variables and can access
//  them. In other words, a closure is a function having access to the parent
//  scope, even after the parent function has closed
function ask(question) {
  setTimeout(function waitASec() {
    // Notice how this function has access to the question variable
    console.log(question);
  }, 1000);
}

ask("What is closure?");

function ask2(question) {
  return function holdYourQuestion() {
    console.log(question);
  }
}

var myQuestion = ask2("What is closure?");

myQuestion();

var teacher = "Kyle";

var myTeacher = function getTeacher() {
  console.log(teacher);
}

teacher = "Suzy";

myTeacher();