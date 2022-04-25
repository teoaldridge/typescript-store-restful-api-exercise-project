"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor() {
        this.store = new Array();
    }
    contains(key) {
        return this.store.some((kvt) => kvt.key == key);
    }
    add(kvt) {
        if (!this.contains(kvt.key)) {
            this.store.push(kvt);
            return true;
        }
        return false;
        //add metadata!
    }
    retrieve(key) {
        if (!this.contains(key)) {
            return null;
        }
        return this.store.filter((kvt) => kvt.key == key)[0];
    }
}
exports.Store = Store;
;
