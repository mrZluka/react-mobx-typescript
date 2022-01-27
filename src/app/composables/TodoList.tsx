import Item from "../components/Item";
import { useStores } from "../store/providers/RootProvider";
import { observer } from "mobx-react";


function TodoList() {
    const store = useStores();
    const onItemChange = (id: number, isDone: boolean) => {
        store.todoStore.modifyTodoState(id, isDone);
    }

    const onRemove = (id: number) => {
        store.todoStore.removeTodoItem(id);
    }

    return (
        <div>
            {store.todoStore.todoList.map(el => (
                <Item itemData={el} key={el.id} onStatusChange={onItemChange} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default observer(TodoList);
