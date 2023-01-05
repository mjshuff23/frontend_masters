// Let’s study a few examples of extends scenarios and see if we can figure out whether it will evaluate to true or false

// condition
// 1	64 extends number
// 2	number extends 64
// 3	string[] extends any
// 4	string[] extends any[]
// 5	never extends any
// 6	any extends any
// 7	Date extends {new (...args: any[]): any }
// 8	(typeof Date) extends {new (...args: any[]): any }

type answer_1 = 64 extends number ? true : false;
type answer_2 = number extends 64 ? true : false;
type answer_3 = string[] extends any ? true : false;
type answer_4 = string[] extends any[] ? true : false;
type answer_5 = never extends any ? true : false;
type answer_6 = any extends any ? true : false;
type answer_7 = Date extends {new (...args: any[]): any } ? true : false;
type answer_8 = (typeof Date) extends {new (...args: any[]): any } ? true : false;