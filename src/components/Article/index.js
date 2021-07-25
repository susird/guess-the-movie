import React, { useState, useEffect } from 'react';
import { Header } from '../Header';
import { Title } from '../Title';
import { Main } from '../Main';
import './styles.css';


export function Article() {
  const [game, setGame] = useState({
    message: '',
    lives: 3,
    points: 0,
  })

  useEffect(() => {
    if (game.lives === 0) {
      setGame({
        message: 'Game Over!',
        lives: 3,
        points: 0,
      })
    }
    if (game.points === 3) {
      setGame({
        message: 'You Win!',
        lives: 3,
        points: 0,
      })
    }
  }, [game.lives, game.points])
  return (
    <article className="container">
      <Header game={game} />
      <Title />
      {<p className="game-over">{game.message}</p>}
      <Main handleGame={setGame} />
    </article>
  )
}