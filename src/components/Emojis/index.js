import React from 'react';
import './styles.css'

export function Emojis ({emoji}) {
  return (
  <p className="emojis">
    { emoji }
  </p>
  )
}