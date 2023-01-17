// Objects /////////////////////////////////////////////////////////////////
// this, class {}, Prototypes, "Inheritance" Vs. "Behavior Delegation"

// this references the execution context for a function all, determined
//  entirely by how the function is called

// Implicit and Explicit Binding
const workshop = {
  teacher: "Kyle",
  ask (question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("What is implicit binding?");

function ask(question) {
  console.log(this.teacher, question);
};

const workshop1 = {
  teacher: "Kyle",
};

const workshop2 = {
  teacher: "Suzy",
}

ask.call(workshop1, "What is call/apply binding?");
ask.call(workshop2, "What is call/apply binding?");

// Sometimes the context is lost, so we need to hard bind
setTimeout(workshop.ask, 10, "What is hard binding?");
setTimeout(workshop.ask.bind(workshop), 10, "What is hard binding?");

// Constructor Calls

const newEmptyObject = new ask("What is 'new' doing here?");
console.log(newEmptyObject); 