import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ formState }) {
    const investmentsResults = formState.reduce((acc, { id, value }) => ({
        ...acc,
        [id]: value
    }), {})
    const annualData = calculateInvestmentResults(investmentsResults);
    return (
        <table id='result'>
            <caption>
                Front-end web developer course 2024
            </caption>
            <thead>
                <tr>
                    {formState.map((row, i) => (
                        <th
                            key={i + row.label}>
                            {row.label}
                        </th>))}
                </tr>
            </thead>
            <tbody>
                {annualData.map((row, i) => (
                    <tr key={i + row.interest}>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(row.annualInvestment)}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>

                        <td>{row.year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}