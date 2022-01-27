import { IToDoItem } from "../store/substore/todo/ToDoState";
import React, { Component } from "react";
import { ItemClose, ItemContainer, ItemText } from "./style/StyleItem";
import { observer } from "mobx-react";
import { boundMethod } from "../utils";

@observer
class Item extends Component<{
    itemData: IToDoItem,
    onStatusChange: (id: number, isDone: boolean) => void;
    onRemove: (id: number) => void;
}, never> {

    @boundMethod
    onStatusChange(e: unknown) {
        this.props.onStatusChange(this.props.itemData.id, !this.props.itemData.isDone);
    };

    @boundMethod
    onRemove(e: unknown) {
        this.props.onRemove(this.props.itemData.id);
    };

    @boundMethod
    getClassName () {
        return this.props.itemData.isDone ? "done" : "";
    };

    render() {
        console.log("Render item:", this.props.itemData.name);
        return (
            <ItemContainer>
                <ItemClose onClick={this.onRemove}>[X]</ItemClose>
                <input type={"checkbox"} checked={this.props.itemData.isDone}
                       onChange={this.onStatusChange}/>
                <ItemText className={this.getClassName()} onClick={this.onStatusChange}>{this.props.itemData.name}</ItemText>
            </ItemContainer>
        )
    }
}

export default Item;
