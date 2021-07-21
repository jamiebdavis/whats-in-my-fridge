import { ItemListContext } from "./ItemListProvider";
import React from "react";

export default function List() {
    const { items } = React.useContext(ItemListContext);

    return (
        <>
            <div>{items}</div>
        </>
    );
}
