import React, { useState } from 'react';
import { Emojis } from '../Emojis';
import { InputAndButton } from '../Input';

const movieList = [
  { id: 1, name: 'Back to the future', emoji: '👦 👴 🚗 ⌚' },
  { id: 2, name: 'Frozen', emoji: '🏰 👭 🌀 ❄ ☃' },
  { id: 3, name: 'Lady and the Tramp', emoji: '🐶 🍝 🐶 💏' },
  { id: 4, name: 'Life of Pi', emoji: '👱‍♂️ 🌊 🚣 🐯 🐯' },
];
const randomGenerator = () => Math.round(Math.random() * 3);

export function Main({handleGame}) {
  const newRandom = randomGenerator();
  const [random, setRandom] = useState(newRandom);
  const checkMovie = (movieName) => {
    if (movieName.toUpperCase() === movieList[random].name.toUpperCase()) {
      const newRandom = randomGenerator()
      setRandom(newRandom)
      handleGame((gameState) => ({...gameState, points: gameState.points+1})) 
    }else {
      handleGame((gameState) => ({...gameState, lives: gameState.lives-1}))
    }
  }

  return (
    <main className="main">
      <Emojis emoji={movieList[random].emoji} />
      <InputAndButton checkMovie={checkMovie} />
    </main>
  )
}