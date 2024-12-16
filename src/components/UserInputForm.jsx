import { useState } from "react";
import InputElement from "./InputElement"

const INITIAL_INPUT_PROPS = [
    { label: 'INITIAL INVESTMENT', id: 'initialInvestment', value: 10000 },
    { label: 'ANNUAL INVESTMENT', id: 'annualInvestment', value: 1200 },
    { label: 'EXPECTED RETURN', id: 'expectedReturn', value: 6 },
    { label: 'DURATION', id: 'duration', value: 10 },
]

export default function UserInputForm() {

    const [formState, setFormState] = useState(INITIAL_INPUT_PROPS)

    function onInputValueChange(id, newValue) {
        setFormState(prev =>
            prev.map(el =>
                el.id === id
                    ? { ...el, value: newValue } // Оновлюємо об'єкт, якщо id співпадає
                    : el // Повертаємо інші об'єкти без змін
            )
        );
    }

    return (
        <section id="user-input">
            <div className="input-group">
                {formState
                    .slice(0, 2)
                    .map(({ label, value, id }, i) =>
                    (<InputElement
                        label={label}
                        value={value}
                        id={id}
                        key={label + i}
                        onInputChange={onInputValueChange}
                    />))}
            </div>
            <div className="input-group">
                {formState
                    .slice(2)
                    .map(({ label, value, id }, i) =>
                    (<InputElement
                        label={label}
                        value={value}
                        key={label + i}
                        id={id}
                    />))}
            </div>
        </section>
    )
}