import React, { useState } from 'react'
import Form from "./components/Form";
import CardList from './components/CardList'

function App() {
  const [cards, setCards] = useState([])

  const addNewCard = (card) => {
    setCards([...cards, card])
  }  

  return (
    <div className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
      <h1>Search for a Github User</h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
}

export default App;
