import React, { useState } from 'react'
import './styles.css'

export function InputAndButton({ checkMovie }) {
  const [name, setName] = useState('');
  const handleClick = () => {
    checkMovie(name);
    setName('');
  }
  const disableButton = name === ''
  return (
    <div className="input-button">
      <input 
        id="movie" 
        onChange={event => setName(event.target.value)} 
        value={name}
        placeholder="Guess the movie" 
        name="movie" 
        type="text" 
      />
      <button 
        className="button" 
        onClick={handleClick} 
        type="button"
        disabled={disableButton}
      >
        Send
      </button>
    </div>
  )
}