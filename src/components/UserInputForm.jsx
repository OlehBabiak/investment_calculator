import InputElement from "./InputElement"

export default function UserInputForm({ formState, onInputValueChange }) {

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