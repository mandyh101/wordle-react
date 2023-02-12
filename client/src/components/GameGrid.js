import React from 'react'

// components
import GameRow from './Row'

export default function Grid({ guesses, currentGuess, turn }) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <GameRow key={i} currentGuess={currentGuess} />
        }
        return <GameRow key={i} guess={g} />
      })}
    </div>
  )
}
