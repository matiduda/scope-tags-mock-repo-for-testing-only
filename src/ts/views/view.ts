
// Has 1 dependency -> Modal

import { ModalWindow } from "./modalWindow";

export class View {
    constructor(
        private _modal: ModalWindow,
    ) { }

    doStuff() {
        this._modal.doStuff();
    }
}