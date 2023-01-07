// Class Property Inference from Constructors
// This major convenience feature reduces the need for class field type
//  annotations by inferring their types from assignments in the constructor.
// It's important to remember that this only works when noImplicitAny is
//  set to true in tsconfig.json.
class Color1 {
  red // inferred to be number
  green // inferred to be number
  blue // inferred to be number
  constructor(c: [number, number, number]) {
    this.red = c[0]
    this.green = c[1]
    this.blue = c[2]
  }

  printRGB() {
    console.log(`rgb(${this.red}, ${this.green}, ${this.blue})`)
  }
}

const color1 = new Color1([255, 0, 0])
color1.printRGB()

class Person {
  name // inferred to be string
  age: number;  // without inference
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}