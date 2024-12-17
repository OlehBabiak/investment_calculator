import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ formState }) {
    const investmentsResults = formState.reduce((acc, { id, value }) => ({
        ...acc,
        [id]: value
    }), {})
    const annualData = calculateInvestmentResults(investmentsResults);
    const initialInvestment =
        annualData[0].valueEndOfYear -
        annualData[0].interest -
        annualData[0].annualInvestment;

    return (
        <table id='result'>
            <caption>
                Total results
            </caption>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData.map(row => {
                    const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                    const totalAmountInvestment = row.valueEndOfYear - totalInterest;
                    return (
                        <tr key={row.year}>
                            <td>{row.year}</td>
                            <td>{formatter.format(row.valueEndOfYear)}</td>
                            <td>{formatter.format(row.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvestment)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}