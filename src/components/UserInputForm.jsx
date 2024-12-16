import InputElement from "./InputElement"

export default function UserInputForm() {

    const INITIAL_INPUT_PROPS = [
        { label: 'INITIAL INVESTMENT', id: 'initialInvestment', value: 10000 },
        { label: 'ANNUAL INVESTMENT', id: 'annualInvestment', value: 1200 },
        { label: 'EXPECTED RETURN', id: 'expectedReturn', value: 6 },
        { label: 'DURATION', id: 'duration', value: 10 },
    ]

    function onInputChange() {

    }

    return (
        <section id="user-input">
            <div className="input-group">
                {INITIAL_INPUT_PROPS
                    .slice(0, 2)
                    .map(({ label, value, id }, i) =>
                    (<InputElement
                        label={label}
                        value={value}
                        id={id}
                        key={label + i}
                    />))}
            </div>
            <div className="input-group">
                {INITIAL_INPUT_PROPS
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