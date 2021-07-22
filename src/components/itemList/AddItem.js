import { ItemListContext } from "./ItemListProvider";
import React from "react";

export default function AddItem() {
    const { addItemHandler } = React.useContext(ItemListContext);
    const [food, setFood] = React.useState(null);

    const handleFoodSubmission = () => {
        addItemHandler(food);
        setFood(null);
    };

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">Add Item</span>
            </label>
            <div className="relative">
                <input
                    type="text"
                    value={food ? food : ""}
                    placeholder={"enter food"}
                    className="w-full pr-16 input input-primary input-bordered"
                    onChange={e => setFood(e.target.value)}
                />
                <button
                    className="absolute right-0 top-0 rounded-l-none btn btn-primary"
                    onClick={() => handleFoodSubmission()}
                >
                    Add
                </button>
            </div>
        </div>
    );
}
