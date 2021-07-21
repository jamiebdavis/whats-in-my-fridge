import { ItemListContext } from "./ItemListProvider";
import React from "react";

export default function AddItem() {
    const { addItemHandler, items } = React.useContext(ItemListContext);

    console.log(items);

    //TODO: Add food handler, add food to state

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">Add Item</span>
            </label>
            <div className="relative">
                <input
                    type="text"
                    placeholder={"enter food"}
                    className="w-full pr-16 input input-primary input-bordered"
                />
                <button
                    className="absolute right-0 top-0 rounded-l-none btn btn-primary"
                    onClick={e => addItemHandler("banana")}
                >
                    Add
                </button>
            </div>
        </div>
    );
}
