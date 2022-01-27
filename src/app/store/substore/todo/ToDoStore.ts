/**
 * created by mrzluka on 26.01.2022
 */
import { ToDoState } from "./ToDoState";
import { action, computed, makeObservable, observable } from "mobx";

export default class ToDoStore {
    constructor() {
        console.log("ToDoStore");
        makeObservable(this)
    }

    @observable
    private _todoList: ToDoState[] = [];


    @computed
    get todoList(): Readonly<ToDoState[]> {
        return this._todoList;
    }

    @action
    addTodoItem(name: string) {
        this._todoList.push(new ToDoState(name));
    }

    @action
    removeTodoItem(id: number) {
        const index = this._todoList.findIndex(el => el.id === id);
        if (index > -1) {
            this._todoList.splice(index, 1);
        }
    }

    @action
    modifyTodoState(id: number, isDone: boolean) {
        const item = this._todoList.find((el) => el.id === id);
        if (item) {
            item.setToDoStatus(isDone);
        }
    }
}
