import React from 'react'

const Button = ({ countUp, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(countUp)
  }

  return (
    <button onClick={handleClick}>{countUp}</button> 
   )
}

export default Button
