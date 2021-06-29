import React, { createContext, useState } from "react";

export const ItemListContext = createContext();

export default function ItemListProvider({ children }) {
    const [placeHolder, setPlaceHolder] = useState("Item list Provider");

    const contextValue = {
        placeHolder,
    };

    return <ItemListContext.Provider value={contextValue}>{children}</ItemListContext.Provider>;
}
