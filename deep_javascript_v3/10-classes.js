// Classes /////////////////////////////////////////////////////////////////////
// Classes are a new way to define objects in JavaScript. They are a syntactic
// sugar on top of the existing prototype-based object system. 
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  };
  ask = (question) => {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(message) {
    this.ask(message.toUpperCase());
  };
}

const deepJS = new Workshop("Kyle");
const reactJS = new Workshop("Suzy");
deepJS.ask("Is 'class' a class?");
reactJS.ask("Is 'class' a class?");

const JSRecentParts = new AnotherWorkshop("Kyle");
JSRecentParts.speakUp("Is this class really a class?");

const myWorkshop = new Workshop("Michael");
setTimeout(myWorkshop.ask, 10, "What is implicit binding?");