import { React } from 'react'
import { useState } from 'react'

const KeyboardComponent = () => {
  // state variables
  let [currentTile, setCurrentTile] = useState(0)

  const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Enter',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<<',
  ]

  const handleClick = (key) => {
    // Handle click logic here
    if (key === '<<') {
      // deleteletter() function
      console.log('delete')
      return
    } else if (key === 'Enter') {
      // checkForWin() function
      console.log('check for win')
      return
    } else {
      // addLetterToRow(key) function
      console.log('add letter to row')
    }
  }

  return (
    <div className="key-container">
      {keys.map((key) => (
        <button key={key} id={key} onClick={() => handleClick(key)}>
          {key}
        </button>
      ))}
    </div>
  )
}

export default KeyboardComponent
