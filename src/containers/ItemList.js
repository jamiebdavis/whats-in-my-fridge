import AddItem from "../components/itemList/AddItem";
import ItemListProvider from "../components/itemList/ItemListProvider";
import List from "../components/itemList/List";
import React from "react";

export default function ItemList() {
    return (
        <ItemListProvider>
            <AddItem />
            <List />
        </ItemListProvider>
    );
}
