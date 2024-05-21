
// Has 2 dependencies -> View and Model

import { Model } from "../models/Model";
import { View } from "../views/View";

export class Controller {
    constructor(
        private _model: Model,
        private _view: View,
    ) { }

    public doStuff() {
        this._model.doStuff();
        this._view.doStuff();
    }
}