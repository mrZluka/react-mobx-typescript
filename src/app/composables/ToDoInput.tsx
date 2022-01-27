/**
 * created by mrzluka on 27.01.2022
 */
import { StoreComponent } from "../components/base/StoreComponent";
import { withStore } from "../store/hooks";
import React from "react";
import { DoToInput, DoToInputContainer } from "./style/StyleToDoInput";
import { boundMethod } from "../utils";

class ToDoInput extends StoreComponent<any> {

    inputElement = React.createRef<HTMLInputElement>();

    @boundMethod
    add() {
        const val = this.inputElement.current?.value as string;
        if (val) {
            this.props.store.todoStore.addTodoItem(val);
        }

        this.clear();
    }

    @boundMethod
    clear() {
        if (this.inputElement.current) {
            this.inputElement.current.focus();
            this.inputElement.current.value = "";
        }
    }

    render() {
        return (
            <DoToInputContainer>
                <label htmlFor={"inp"}>Add item</label>
                <DoToInput ref={this.inputElement} type={"text"} name={"inp"}/>
                <div>
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.clear}>Clear</button>
                </div>

            </DoToInputContainer>
        );
    }
}

export default withStore(ToDoInput);
