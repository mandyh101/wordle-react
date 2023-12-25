import React from 'react'

// components
import GameGrid from './GameGrid'
import KeyboardComponent from './Keyboard'

//TODO import keypad too
export default function Wordle({ wordle }) {
  return (
    <div>
      {/* delete the below h1 */}
      <h1>{wordle}</h1>
      {/* create a message container */}
      {/* create a wordle tile display grid */}
      {/* create the key pad */}
      <KeyboardComponent />
    </div>
  )
}
