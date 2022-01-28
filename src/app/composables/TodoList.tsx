import Item from "../components/Item";
import { useStores } from "../store/providers/RootProvider";
import { observer } from "mobx-react";
import { useCallback } from "react";


function TodoList() {
    const store = useStores();
    const onItemChange = useCallback((id: number, isDone: boolean) => {
        store.todoStore.modifyTodoState(id, isDone);
    }, [store.todoStore]);

    const onRemove = useCallback((id: number) => {
        store.todoStore.removeTodoItem(id);
    }, [store.todoStore]);

    return (
        <div>
            {store.todoStore.todoList.map(el => (
                <Item itemData={el} key={el.id} onStatusChange={onItemChange} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default observer(TodoList);
