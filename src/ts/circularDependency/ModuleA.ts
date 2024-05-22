import { ModuleB } from "./ModuleB";

export type commonTypeFromModuleA = {
    amount: number,
    title: string,
}

export class ModuleA {
    constructor(
        private _moduleB: ModuleB,
    ) { }

    doStuff() {
        throw new Error("Method not implemented.");
    }
}