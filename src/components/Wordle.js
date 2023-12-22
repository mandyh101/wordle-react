import React from 'react'

// components
import GameGrid from './GameGrid'

//TODO import keypad too
export default function Wordle({ wordle }) {
  return (
    <div>
      <h1>{wordle}</h1>
      {/* Guesses and the current guess get passed to the GameGrid component */}
      {/* <GameGrid /> */}
    </div>
  )
}
