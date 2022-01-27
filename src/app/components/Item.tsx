import { IToDoItem } from "../store/substore/todo/ToDoState";
import React from "react";
import { ItemClose, ItemContainer, ItemText } from "./style/StyleItem";
import { observer } from "mobx-react";

function Item(props: {
    itemData: IToDoItem,
    onStatusChange: (id: number, isDone: boolean) => void;
    onRemove: (id: number) => void;
}) {

    const onStatusChange = (e: unknown) => {
        props.onStatusChange(props.itemData.id, !props.itemData.isDone);
    }

    const onRemove = (e: unknown) => {
        props.onRemove(props.itemData.id);
    }


    const getClassName = () => {
        return props.itemData.isDone ? "done" : "";
    }

    return (
        <ItemContainer>
            <ItemClose onClick={onRemove}>[X]</ItemClose>
            <input type={"checkbox"} checked={props.itemData.isDone}
                   onChange={onStatusChange}/>
            <ItemText className={getClassName()} onClick={onStatusChange}>{props.itemData.name}</ItemText>
        </ItemContainer>
    )
}

export default observer(Item);
