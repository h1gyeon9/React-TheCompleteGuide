import {useState} from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Table from './components/Table.jsx';

function App() {
  const [userProperties, setUserProperties] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

  const inputIsValid = userProperties.duration >= 1;

  function handleChange(event, property) {
    setUserProperties(prevProperties => ({
        ...prevProperties,
        [property]: +event.target.value
    }));
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userProperties={userProperties} />
      {!inputIsValid && (<p className="center">Please enter a duration greater than zero.</p>)}
      {inputIsValid && <Table userProperties={userProperties} />}
    </>
  )
}

export default App
