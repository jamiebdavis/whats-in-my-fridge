import { ItemListContext } from "./ItemListProvider";
import React from "react";

export default function List() {
    // loading user state
    const { items, isLoading } = React.useContext(ItemListContext);

    if (isLoading) return <div>Loading....</div>;

    return (
        <>
            <div>{items}</div>
        </>
    );
}
