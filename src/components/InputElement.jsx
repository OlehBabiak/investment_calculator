import { useState } from "react"

export default function InputElement({ value, label, id, onInputChange }) {
    return (
        <p>
            <label
                for={id}>
                {label}
            </label>
            <input
                onChange={(e) => onInputChange(id, e.target.value)}
                type="number"
                id={id}
                required
                value={value}
            />
        </p>
    )

}

