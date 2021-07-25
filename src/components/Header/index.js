import React from 'react';
import './styles.css';

export function Header({ game }) {
  const { lives, points } = game;
  return (
    <header className="header">
      <p className="lives">Lives: {lives}</p>
      <p className="points">Points: {points}</p>
    </header>
  )
}