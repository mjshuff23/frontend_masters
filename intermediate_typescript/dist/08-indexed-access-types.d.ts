interface CarShape {
    make: string;
    model: string;
    year: number;
    color: {
        red: string;
        green: string;
        blue: string;
    };
}
declare let carColor: CarShape['color'];
declare let carMake: CarShape['make'];
declare let carColorRedComponents: CarShape['color']['red'];
declare let carProperty: CarShape['make' | 'model' | 'color'];
//# sourceMappingURL=08-indexed-access-types.d.ts.map