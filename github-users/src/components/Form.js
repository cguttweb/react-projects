import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  const [username, setUsername] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()

    axios.get(`https://api.github.com/users/${username}`).then((resp) => {
      props.onSubmit(resp.data)
      setUsername('')
    })
  }

  return (
    <form onSubmit={}>
      
    </form>
  )
}

export default Form
