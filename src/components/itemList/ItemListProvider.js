import React, { createContext, useState } from "react";

export const ItemListContext = createContext();

export default function ItemListProvider({ children }) {
    const [items, setItems] = useState(["cheese", "milk", "butter"]);

    const addItemHandler = item => {
        setItems(oldItemList => [...oldItemList, item]);
        console.log("button clicked");
    };

    const contextValue = {
        items,
        addItemHandler,
    };

    return <ItemListContext.Provider value={contextValue}>{children}</ItemListContext.Provider>;
}
