declare class WebpackCompiler {
    constructor(options: {
        amd?: false | {
            [index: string]: any;
        };
        bail?: boolean;
        cache?: boolean | {
            maxGenerations?: number;
            type: "memory";
        };
        context?: string;
        dependencies?: string[];
        devTool?: string;
        entry?: string;
        chunkLoading?: boolean;
        dependOn?: string[];
        layer?: string;
        runtime?: string;
        wasmLoading?: boolean;
        externalsType?: "var" | "this" | "commonjs" | "commonjs2" | "commonjs-module";
        watch?: boolean;
    });
}
declare const cfg: {
    entry: string;
    wutch: boolean;
};
declare class FruitStand {
    constructor(fruitNames: string[]);
}
type ConstructorArg<Type> = Type extends {
    new (arg: infer A, ...args: any[]): any;
} ? A : never;
type ConstructorArg2<Type> = Type extends {
    new (arg: infer A, ...args: any[]): Date;
} ? A : never;
declare let fruits: ConstructorArg<typeof FruitStand>;
declare let compilerOptions: ConstructorArg<typeof WebpackCompiler>;
declare const compiler: WebpackCompiler;
declare let dateFirst: ConstructorArg<typeof Date>;
declare let promiseFirst: ConstructorArg<typeof Promise>;
declare let webpackCfg: ConstructorArg<typeof WebpackCompiler>;
//# sourceMappingURL=07-inference_conditional_types.d.ts.map