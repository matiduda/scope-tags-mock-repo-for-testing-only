// Has 0 dependencies

import { View } from "../views/View";

export class Model {
    constructor(
        private _view: View,
    ) { }

    doStuff() {
        throw new Error("Method not implemented.");
    }
}