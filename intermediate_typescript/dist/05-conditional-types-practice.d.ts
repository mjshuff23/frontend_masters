type answer_1 = 64 extends number ? true : false;
type answer_2 = number extends 64 ? true : false;
type answer_3 = string[] extends any ? true : false;
type answer_4 = string[] extends any[] ? true : false;
type answer_5 = never extends any ? true : false;
type answer_6 = any extends any ? true : false;
type answer_7 = Date extends {
    new (...args: any[]): any;
} ? true : false;
type answer_8 = (typeof Date) extends {
    new (...args: any[]): any;
} ? true : false;
//# sourceMappingURL=05-conditional-types-practice.d.ts.map