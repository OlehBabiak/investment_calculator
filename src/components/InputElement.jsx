import { useState } from "react"

export default function InputElement({ value, label, id }) {
    const [inputValue, setInputValue] = useState(value)
    function onInputChange(e) {
        setInputValue(e.target.value);
    }
    return (
        <p>
            <label
                for={id}>
                {label}
            </label>
            <input
                onChange={onInputChange}
                type="number"
                id={id}
                required
                value={inputValue}
            />
        </p>
    )

}

