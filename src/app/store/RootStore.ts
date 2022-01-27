/**
 * created by mrzluka on 26.01.2022
 */

import { makeObservable, observable } from "mobx";
import ToDoStore from "./substore/todo/ToDoStore";

export class RootStore {

    @observable
    todoStore: ToDoStore = new ToDoStore();

    constructor() {
        console.log("Calls count");
        makeObservable(this)
    }
}
