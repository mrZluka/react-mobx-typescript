/**
 * created by mrzluka on 27.01.2022
 */
import { ReactElement, useRef } from "react";
import { DoToInput, DoToInputContainer } from "./ToDoInput.style";
import { useStores } from "../store/providers/RootProvider";

function ToDoInput(): ReactElement {

    const inputElement = useRef<HTMLInputElement | null>(null);
    const store = useStores();

    const add = () => {
        const val = inputElement.current?.value as string;
        if (val) {
            store.todoStore.addTodoItem(val);
        }
        clear();
    }

    const clear = () => {
        const input = inputElement.current;
        if (input) {
            input.focus();
            input.value = "";
        }
    }

    return (
        <DoToInputContainer>
            <label htmlFor={"inp"}>Add item</label>
            <DoToInput ref={inputElement} type={"text"} name={"inp"}/>
            <div>
                <button onClick={add}>Add</button>
                <button onClick={clear}>Clear</button>
            </div>

        </DoToInputContainer>
    );
}

export default ToDoInput;
