import React, { createContext, useState } from "react";

import axios from "axios";

export const ItemListContext = createContext();

export default function ItemListProvider({ children }) {
    // const [items, setItems] = useState(["cheese", "milk", "butter"]);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const addItemHandler = item => {
        setItems(oldItemList => [...oldItemList, item]);
        console.log("button clicked");
    };

    const getList = async () => {
        try {
            const response = await axios.get(
                // Move to const file
                "https://s0t80lw9rc.execute-api.eu-west-2.amazonaws.com/dev/items"
            );

            console.log(response);
            setItems(response.data.message);
        } catch (err) {
            console.log(err, "There has been an issue");
        }
        setIsLoading(false);
    };

    React.useEffect(() => {
        getList();
    }, []);

    const contextValue = {
        items,
        isLoading,
        addItemHandler,
    };

    return <ItemListContext.Provider value={contextValue}>{children}</ItemListContext.Provider>;
}
