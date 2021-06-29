import React from "react";

export default function AddItem() {
    return (
        <div class="form-control">
            <label class="label">
                <span class="label-text">Add Item</span>
            </label>
            <div class="relative">
                <input
                    type="text"
                    placeholder="enter food"
                    class="w-full pr-16 input input-primary input-bordered"
                />
                <button class="absolute right-0 top-0 rounded-l-none btn btn-primary">Add</button>
            </div>
        </div>
    );
}