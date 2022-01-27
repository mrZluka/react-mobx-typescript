import { StoreComponent } from "../components/base/StoreComponent";
import Item from "../components/Item";
import { withStore } from "../store/hooks";
import { observer } from "mobx-react";
import { boundMethod } from "../utils";


@observer
class TodoList extends StoreComponent<{}> {

    @boundMethod
    onItemChange(id: number, isDone: boolean) {
        this.props.store.todoStore.modifyTodoState(id, isDone);
    }

    @boundMethod
    onRemove(id: number) {
        this.props.store.todoStore.removeTodoItem(id);
    }

    render() {
        return (
            <div>
                {this.props.store.todoStore.todoList.map(el => (
                    <Item itemData={el} key={el.id} onStatusChange={this.onItemChange} onRemove={this.onRemove}/>
                ))}
            </div>
        );
    }
}

export default withStore(TodoList);
