import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {

  const [count, setCount] = useState(0)

  const incrementCount = (countUp) => {
    setCount(count + countUp)
  }
  return (
    <div className="App-header">
    <p>A very basic counter using React</p>
    <img src={logo} alt="React logo" width="350" />
      <Button countUp={1}  onClickFunction={incrementCount} />
      <Button countUp={10} onClickFunction={incrementCount}/>
      <Button countUp={100} onClickFunction={incrementCount} />
      <Button countUp={500} onClickFunction={incrementCount} />
      <Button countUp={1000} onClickFunction={incrementCount} />
      <span>Your count is {count}</span>
    </div>
  );
}

export default App;
