declare const x = 16;
declare const isXNegative: string;
declare class Grill {
    startGas(): void;
    stopGas(): void;
}
declare class Oven {
    setTemperature(degrees: number): void;
}
type CookingDevice<Type> = Type extends "grill" ? Grill : Oven;
declare const device1: CookingDevice<"grill">;
declare const device2: CookingDevice<"oven">;
declare const device4: CookingDevice<"oven" | "grill">;
//# sourceMappingURL=04-conditional-types.d.ts.map