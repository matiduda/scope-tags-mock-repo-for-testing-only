import { commonTypeFromModuleA } from "./ModuleA";

export class ModuleB {
    constructor(
    ) { }

    doStuff() {
        const variable: commonTypeFromModuleA = {
            amount: 0,
            title: "Title"
        };

        console.log(variable);
    }
}