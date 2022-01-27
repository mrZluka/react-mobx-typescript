/**
 * created by mrzluka on 26.01.2022
 */
import { action, makeObservable, observable } from "mobx";

export interface IToDoItem {
    id: number,
    name: string,
    isDone: boolean,
}

export class ToDoState implements IToDoItem {
    
    id: number = Date.now();
    @observable isDone: boolean = false;
    @observable name: string = "";

    constructor(name: string) {
        this.name = name;
        makeObservable(this);
    }

    @action
    setToDoStatus(isDone: boolean) {
        this.isDone = isDone;
    }
}
