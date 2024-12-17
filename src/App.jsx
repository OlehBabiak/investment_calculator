import Header from "./components/Header"
import Results from "./components/Results"
import UserInputForm from "./components/UserInputForm"
import { useState } from 'react'

const INITIAL_INPUT_PROPS = [
  { label: 'INITIAL INVESTMENT', id: 'initialInvestment', value: 10000 },
  { label: 'ANNUAL INVESTMENT', id: 'annualInvestment', value: 1200 },
  { label: 'EXPECTED RETURN', id: 'expectedReturn', value: 6 },
  { label: 'DURATION', id: 'duration', value: 10 },
]

function App() {
  const [formState, setFormState] = useState(INITIAL_INPUT_PROPS)
  function onInputValueChange(id, newValue) {
    setFormState(prev =>
      prev.map(el =>
        el.id === id
          ? { ...el, value: +newValue } // Оновлюємо об'єкт, якщо id співпадає
          : el // Повертаємо інші об'єкти без змін
      )
    );
  }
  return (
    <>
      <Header />
      <UserInputForm
        formState={formState}
        onInputValueChange={onInputValueChange} />
      <Results formState={formState} />
    </>
  )
}

export default App
